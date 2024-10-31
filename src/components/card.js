import { openModal } from "./modal.js";
import { switchLike } from "./api.js";
import {
  cardTemplate,
  popupDeleteImage,
  formDeleteImage,
} from "../utils/constants.js";

function getCardTemplate() {
  return cardTemplate.querySelector(".places__item").cloneNode(true);
}

function createCard(parameters) {
  const card = getCardTemplate();
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const cardLikeCounter = card.querySelector(".card__like-counter");
  const deleteButton = card.querySelector(".card__delete-button");
  const likeButton = card.querySelector(".card__like-button");

  cardImage.setAttribute("src", parameters.cardContent.link);
  cardImage.setAttribute("alt", parameters.cardContent.name);
  cardTitle.textContent = parameters.cardContent.name;
  cardLikeCounter.textContent = parameters.cardContent.likes.length;

  if (parameters.user["_id"] === parameters.cardContent.owner["_id"]) {
    parameters.deleteCard(card, parameters.cardContent["_id"]);
  } else {
    deleteButton.remove();
  }
  if (isUserLiked(parameters.cardContent, parameters.user)) {
    likeButton.classList.add("card__like-button_is-active");
  }

  parameters.likeCard({
    likeButton: likeButton,
    user: parameters.user,
    cardContent: parameters.cardContent,
    cardLikeCounter: cardLikeCounter,
  });
  parameters.setCardImageClickEventListener(
    cardImage,
    parameters.cardContent.name,
    parameters.cardContent.link
  );
  return card;
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

function likeCard(parameters) {
  parameters.likeButton.addEventListener("click", function () {
    if (!isUserLiked(parameters.cardContent, parameters.user)) {
      switchLike(parameters.cardContent["_id"], "PUT")
        .then((res) => {
          parameters.cardContent = res;
          parameters.cardLikeCounter.textContent = res.likes.length;
          parameters.likeButton.classList.add("card__like-button_is-active");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      switchLike(parameters.cardContent["_id"], "DELETE")
        .then((res) => {
          parameters.cardContent = res;
          parameters.cardLikeCounter.textContent = res.likes.length;
          parameters.likeButton.classList.remove("card__like-button_is-active");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
}

export { createCard, deleteCard, likeCard, formDeleteImage };
