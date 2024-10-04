import { openPopup } from "./modal.js";

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
const cardTemplate = document.querySelector("#card-template").content;
const content = document.querySelector(".content");
const cardsContainer = content.querySelector(".places__list");
const newPlace = document.forms["new-place"];
const placeName = newPlace.elements["place-name"];
const placeLink = newPlace.elements.link;
const popupTypeImage = document.querySelector(".popup_type_image");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");

function loadImage(image) {
  const card = image.parentNode;
  const description = card.querySelector(".card__title");
  const altValue = image.alt;
  const srcValue = image.src;
  popupImage.setAttribute("src", srcValue);
  popupImage.setAttribute("alt", altValue);
  popupCaption.textContent = description.textContent;
}

function createCard(cardContent, deleteCard, likeCard, openPopup) {
  const card = cardTemplate.querySelector(".places__item").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  cardImage.setAttribute("src", cardContent.link);
  cardImage.setAttribute("alt", cardContent.name);
  card.querySelector(".card__title").textContent = cardContent.name;
  deleteCard(card);
  likeCard(card);
  const popupInfo = {
    popup: popupTypeImage,
    button: cardImage,
    buttonClass: "card__image",
    functional: loadImage,
  };
  openPopup(popupInfo);
  return card;
}

function deleteCard(card) {
  const deleteButton = card.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", function () {
    card.remove();
  });
}

function likeCard(card) {
  const likeButton = card.querySelector(".card__like-button");
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("card__like-button_is-active");
  });
}

function listenAddCardSubmit() {
  newPlace.addEventListener("submit", addNewCard);
}

function addNewCard(evt) {
  evt.preventDefault();
  const card = {
    name: placeName.value,
    link: placeLink.value,
  };
  cardsContainer.prepend(createCard(card, deleteCard, likeCard, openPopup));
  placeName.value = "";
  placeLink.value = "";
}

function loadCards() {
  initialCards.forEach((item) => {
    cardsContainer.append(createCard(item, deleteCard, likeCard, openPopup));
  });
}

export { loadCards, listenAddCardSubmit };
