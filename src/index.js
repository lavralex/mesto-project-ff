import "./pages/index.css";
import {
  createCard,
  deleteCard,
  likeCard,
  submitDelete,
  formDeleteImage,
} from "./components/card.js";
import { openModal, closeModal } from "./components/modal.js";
import { enableValidation, clearValidation } from "./components/validation.js";
import {
  getSrartData,
  patchProfile,
  patchAvatar,
  postCard,
} from "./components/api.js";

const content = document.querySelector(".content");
const cardsContainer = content.querySelector(".places__list");
const buttonOpenEditProfileForm = document.querySelector(
  ".profile__edit-button"
);
const buttonOpenAddСardForm = document.querySelector(".profile__add-button");
const popupEditProfile = document.querySelector(".popup_type_edit");
const popupAddСard = document.querySelector(".popup_type_new-card");
const formAddCard = document.forms["new-place"];
const placeName = formAddCard.elements["place-name"];
const placeLink = formAddCard.elements.link;
const profileForm = document.forms["edit-profile"];
const newProfileName = profileForm.elements.name;
const newProfileDescription = profileForm.elements.description;
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const popupTypeImage = document.querySelector(".popup_type_image");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");
const avatarContainer = document.querySelector(".profile__image-container");
const popupAvatar = document.querySelector(".popup_type_avatar");
const avatarForm = document.forms["edit-avatar"];
const avatarFormLink = avatarForm.elements["avatar-link"];
const profileImage = document.querySelector(".profile__image");
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

function setCardImageClickEventListener(cardImage, imageTitle, imageSrc) {
  cardImage.addEventListener("click", () => {
    popupImage.setAttribute("src", imageSrc);
    popupImage.setAttribute("alt", imageTitle);
    popupCaption.textContent = imageTitle;
    openModal(popupTypeImage);
  });
}

function loadCards(initialCards, user) {
  initialCards.forEach((item) => {
    cardsContainer.append(
      createCard(
        item,
        deleteCard,
        likeCard,
        setCardImageClickEventListener,
        user
      )
    );
  });
}

function listenFormAddCardSubmit(user) {
  formAddCard.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const buttonText = renderLoading(popupAddСard, true, null);
    postCard(placeName.value, placeLink.value)
      .then((res) => {
        cardsContainer.prepend(
          createCard(
            res,
            deleteCard,
            likeCard,
            setCardImageClickEventListener,
            user
          )
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(popupAddСard, false, buttonText);
        formAddCard.reset();
        clearValidation(formAddCard, validationConfig);
        closeModal(popupAddСard);
      });
  });
}

function setProfileInfo(name, description, image) {
  if (name && description) {
    profileName.textContent = name;
    profileDescription.textContent = description;
  }
  if (image) {
    profileImage.setAttribute("src", image);
  }
}

function renderLoading(popup, isLoading, text) {
  const button = popup.querySelector(".popup__button");
  const currentButtonText = button.textContent;
  if (isLoading) {
    button.textContent = "Сохранение...";
  } else {
    button.textContent = text;
  }
  return currentButtonText;
}

buttonOpenAddСardForm.addEventListener("click", () => openModal(popupAddСard));

buttonOpenEditProfileForm.addEventListener("click", () => {
  clearValidation(profileForm, validationConfig);
  newProfileName.value = profileName.textContent;
  newProfileDescription.value = profileDescription.textContent;
  openModal(popupEditProfile);
});

profileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const buttonText = renderLoading(popupEditProfile, true, null);
  patchProfile({
    name: newProfileName.value,
    about: newProfileDescription.value,
  })
    .then((res) => {
      setProfileInfo(res.name, res.about);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(popupEditProfile, false, buttonText);
      closeModal(popupEditProfile);
    });
});

avatarContainer.addEventListener("click", () => {
  openModal(popupAvatar);
});

avatarForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const buttonText = renderLoading(popupAvatar, true, null);
  patchAvatar(avatarFormLink.value)
    .then((res) => {
      setProfileInfo(null, null, res.avatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(popupAvatar, false, buttonText);
      closeModal(popupAvatar);
      avatarForm.reset();
    });
});

enableValidation(validationConfig);

formDeleteImage.addEventListener("submit", (evt) => {
  evt.cardId = formDeleteImage.cardId;
  evt.card = formDeleteImage.card;
  submitDelete(evt);
});

getSrartData()
  .then((res) => {
    loadCards(res.cards, res.user);
    setProfileInfo(res.user.name, res.user.about, res.user.avatar);
    listenFormAddCardSubmit(res.user);
  })
  .catch((err) => {
    console.log(err);
  });
