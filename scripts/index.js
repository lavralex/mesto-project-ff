const cardTemplate = document.querySelector("#card-template").content;
const content = document.querySelector(".content");
const cardsContainer = content.querySelector(".places__list");

function cardCreate(cardContent, cardDelete) {
  const card = cardTemplate.querySelector(".places__item").cloneNode(true);
  card.querySelector(".card__image").setAttribute("src", cardContent.link);
  card.querySelector(".card__title").textContent = cardContent.name;
  cardDelete(card);
  cardsContainer.append(card);
}

function cardDelete(card) {
  deleteButton = card.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", function () {
    card.remove();
  });
}

for (i = 0; i < initialCards.length; i += 1) {
  let cardContent = initialCards[i];
  cardCreate(cardContent, cardDelete);
}
