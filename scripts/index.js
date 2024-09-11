const cardTemplate = document.querySelector("#card-template").content;
const content = document.querySelector(".content");
const cardsContainer = content.querySelector(".places__list");

function createCard(cardContent, deleteCard) {
  const card = cardTemplate.querySelector(".places__item").cloneNode(true);
  card.querySelector(".card__image").setAttribute("src", cardContent.link);
  card.querySelector(".card__title").textContent = cardContent.name;
  deleteCard(card);
  return card;
}

function deleteCard(card) {
  deleteButton = card.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", function () {
    card.remove();
  });
}

initialCards.forEach((item) => {
  cardsContainer.append(createCard(item, deleteCard));
});
