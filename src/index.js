import "./pages/index.css";
import { createCard, deleteCard, likeCard } from "./components/card.js";
import { openModal, closeModal } from "./components/modal.js";
import initialCards from "./components/cards.js";

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

function setCardImageClickEventListener(cardImage, imageTitle, imageSrc) {
  cardImage.addEventListener("click", () => {
    popupImage.setAttribute("src", imageSrc);
    popupImage.setAttribute("alt", imageTitle);
    popupCaption.textContent = imageTitle;
    openModal(popupTypeImage);
  });
}

initialCards.forEach((item) => {
  cardsContainer.append(
    createCard(item, deleteCard, likeCard, setCardImageClickEventListener)
  );
});

buttonOpenAddСardForm.addEventListener("click", () => openModal(popupAddСard));

formAddCard.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const card = {
    name: placeName.value,
    link: placeLink.value,
  };
  cardsContainer.prepend(
    createCard(card, deleteCard, likeCard, setCardImageClickEventListener)
  );
  formAddCard.reset();
  closeModal(popupAddСard);
});

buttonOpenEditProfileForm.addEventListener("click", () => {
  newProfileName.value = profileName.textContent;
  newProfileDescription.value = profileDescription.textContent;
  openModal(popupEditProfile);
});

profileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = newProfileName.value;
  profileDescription.textContent = newProfileDescription.value;
  closeModal(popupEditProfile);
});
