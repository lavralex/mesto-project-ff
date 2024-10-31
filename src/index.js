import "./pages/index.css";
import {
  createCard,
  deleteCard,
  likeCard,
  formDeleteImage,
} from "./components/card.js";
import { openModal, closeModal } from "./components/modal.js";
import { enableValidation, clearValidation } from "./components/validation.js";
import {
  getSrartData,
  patchProfile,
  patchAvatar,
  postCard,
  deleteCardAPI,
} from "./components/api.js";
import { handleSubmit } from "./utils/utils.js";
import {
  cardsContainer,
  buttonOpenEditProfileForm,
  buttonOpenAddСardForm,
  popupEditProfile,
  popupAddСard,
  formAddCard,
  placeName,
  placeLink,
  profileForm,
  newProfileName,
  newProfileDescription,
  profileName,
  profileDescription,
  popupTypeImage,
  popupImage,
  popupCaption,
  avatarContainer,
  popupAvatar,
  avatarForm,
  avatarFormLink,
  profileImage,
  popupDeleteImage,
  validationConfig,
} from "./utils/constants.js";

function setCardImageClickEventListener(cardImage, imageTitle, imageSrc) {
  cardImage.addEventListener("click", () => {
    popupImage.setAttribute("src", imageSrc);
    popupImage.setAttribute("alt", imageTitle);
    popupCaption.textContent = imageTitle;
    openModal(popupTypeImage);
  });
}

function renderCard(parameters, method = "prepend") {
  const cardElement = createCard(parameters);
  cardsContainer[method](cardElement);
}

function loadCards(initialCards, user) {
  initialCards.forEach((item) => {
    renderCard(
      {
        cardContent: item,
        deleteCard: deleteCard,
        likeCard: likeCard,
        setCardImageClickEventListener: setCardImageClickEventListener,
        user: user,
      },
      "append"
    );
  });
}

function listenFormAddCardSubmit(user) {
  formAddCard.addEventListener("submit", (evt) => {
    function makeRequest() {
      return postCard(placeName.value, placeLink.value).then((res) => {
        renderCard(
          {
            cardContent: res,
            deleteCard: deleteCard,
            likeCard: likeCard,
            setCardImageClickEventListener: setCardImageClickEventListener,
            user: user,
          },
          "prepend"
        );
        clearValidation(formAddCard, validationConfig);
        closeModal(popupAddСard);
      });
    }
    handleSubmit(makeRequest, evt);
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

buttonOpenAddСardForm.addEventListener("click", () => openModal(popupAddСard));

buttonOpenEditProfileForm.addEventListener("click", () => {
  clearValidation(profileForm, validationConfig);
  newProfileName.value = profileName.textContent;
  newProfileDescription.value = profileDescription.textContent;
  openModal(popupEditProfile);
});

profileForm.addEventListener("submit", (evt) => {
  function makeRequest() {
    return patchProfile({
      name: newProfileName.value,
      about: newProfileDescription.value,
    }).then((res) => {
      setProfileInfo(res.name, res.about);
      closeModal(popupEditProfile);
    });
  }
  handleSubmit(makeRequest, evt);
});

avatarContainer.addEventListener("click", () => {
  openModal(popupAvatar);
});

avatarForm.addEventListener("submit", (evt) => {
  function makeRequest() {
    return patchAvatar(avatarFormLink.value).then((res) => {
      setProfileInfo(null, null, res.avatar);
      closeModal(popupAvatar);
    });
  }
  handleSubmit(makeRequest, evt);
});

enableValidation(validationConfig);

formDeleteImage.addEventListener("submit", (evt) => {
  evt.cardId = formDeleteImage.cardId;
  evt.card = formDeleteImage.card;
  function makeRequest() {
    return deleteCardAPI(evt.cardId).then(() => {
      evt.card.remove();
      closeModal(popupDeleteImage);
    });
  }
  handleSubmit(makeRequest, evt, "Удаление...");
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
