import "./pages/index.css";
import { createCard, deleteCard, likeCard } from "./components/card.js";
import { openModal, closeModal } from "./components/modal.js";
import initialCards from "./components/cards.js";

const content = document.querySelector(".content");
const cardsContainer = content.querySelector(".places__list");
const ButtonEditProfile = document.querySelector(".profile__edit-button");
const buttonAddСard = document.querySelector(".profile__add-button");
const popupEdit = document.querySelector(".popup_type_edit");
const popupAddСard = document.querySelector(".popup_type_new-card");
const newPlace = document.forms["new-place"];
const placeName = newPlace.elements["place-name"];
const placeLink = newPlace.elements.link;
const profileForm = document.forms["edit-profile"];
const newProfileName = profileForm.elements.name;
const newProfileDescription = profileForm.elements.description;
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

initialCards.forEach((item) => {
  cardsContainer.append(createCard(item, deleteCard, likeCard, openModal));
});

buttonAddСard.addEventListener("click", () => openModal(popupAddСard));

newPlace.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const card = {
    name: placeName.value,
    link: placeLink.value,
  };
  cardsContainer.prepend(createCard(card, deleteCard, likeCard, openModal));
  placeName.value = "";
  placeLink.value = "";
  closeModal(popupAddСard);
});

ButtonEditProfile.addEventListener("click", () => {
  newProfileName.value = profileName.textContent;
  newProfileDescription.value = profileDescription.textContent;
  openModal(popupEdit);
});

profileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = newProfileName.value;
  profileDescription.textContent = newProfileDescription.value;
  closeModal(popupEdit);
});
