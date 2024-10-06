const cardTemplate = document.querySelector("#card-template").content;

function getCardTemplate() {
  return cardTemplate.querySelector(".places__item").cloneNode(true);
}

function createCard(
  cardContent,
  deleteCard,
  likeCard,
  setCardImageClickEventListener
) {
  const card = getCardTemplate();
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  cardImage.setAttribute("src", cardContent.link);
  cardImage.setAttribute("alt", cardContent.name);
  cardTitle.textContent = cardContent.name;
  deleteCard(card);
  likeCard(card);
  setCardImageClickEventListener(cardImage, cardContent.name, cardContent.link);
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

export { createCard, deleteCard, likeCard };
