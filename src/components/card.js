import { openModal, closeModal } from "./modal.js";
import { switchLike, deleteCardAPI } from "./api.js";

const cardTemplate = document.querySelector("#card-template").content;
const popupDeleteImage = document.querySelector(".popup_type_delete-image");
const formDeleteImage = document.forms["delete-image"];

function getCardTemplate() {
  return cardTemplate.querySelector(".places__item").cloneNode(true);
}

function createCard(
  cardContent,
  deleteCard,
  likeCard,
  setCardImageClickEventListener,
  user
) {
  const card = getCardTemplate();
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const cardLikeCounter = card.querySelector(".card__like-counter");
  const deleteButton = card.querySelector(".card__delete-button");
  const likeButton = card.querySelector(".card__like-button");
  cardImage.setAttribute("src", cardContent.link);
  cardImage.setAttribute("alt", cardContent.name);
  cardTitle.textContent = cardContent.name;
  cardLikeCounter.textContent = cardContent.likes.length;
  if (user["_id"] === cardContent.owner["_id"]) {
    deleteCard(card, cardContent["_id"]);
  } else {
    deleteButton.remove();
  }
  if (isUserLiked(cardContent, user)) {
    likeButton.classList.add("card__like-button_is-active");
  }
  likeCard(likeButton, user, cardContent, cardLikeCounter);
  setCardImageClickEventListener(cardImage, cardContent.name, cardContent.link);
  return card;
}

function submitDelete(evt) {
  evt.preventDefault();
  deleteCardAPI(evt.cardId)
    .then(() => evt.card.remove())
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      closeModal(popupDeleteImage);
    });
}

function deleteCard(card, cardId) {
  const deleteButton = card.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", function () {
    openModal(popupDeleteImage);
    formDeleteImage.card = card;
    formDeleteImage.cardId = cardId;
  });
}

function isUserLiked(cardContent, user) {
  return cardContent.likes.some((like) => {
    return like["_id"] === user["_id"];
  });
}

function likeCard(likeButton, user, cardContent, cardLikeCounter) {
  likeButton.addEventListener("click", function () {
    if (!isUserLiked(cardContent, user)) {
      switchLike(cardContent["_id"], "PUT")
        .then((res) => {
          cardContent = res;
          cardLikeCounter.textContent = res.likes.length;
          likeButton.classList.add("card__like-button_is-active");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      switchLike(cardContent["_id"], "DELETE")
        .then((res) => {
          cardContent = res;
          cardLikeCounter.textContent = res.likes.length;
          likeButton.classList.remove("card__like-button_is-active");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
}

export { createCard, deleteCard, likeCard, submitDelete, formDeleteImage };
