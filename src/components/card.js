const cardTemplate = document.querySelector("#card-template").content;
const popupTypeImage = document.querySelector(".popup_type_image");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");

function createCard(cardContent, deleteCard, likeCard, openModal) {
  const card = cardTemplate.querySelector(".places__item").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  cardImage.setAttribute("src", cardContent.link);
  cardImage.setAttribute("alt", cardContent.name);
  card.querySelector(".card__title").textContent = cardContent.name;
  deleteCard(card);
  likeCard(card);
  cardImage.addEventListener("click", () => {
    popupImage.setAttribute("src", cardContent.link);
    popupImage.setAttribute("alt", cardContent.name);
    popupCaption.textContent = cardContent.name;
    openModal(popupTypeImage);
  });
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
