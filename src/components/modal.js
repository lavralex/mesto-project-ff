function openModal(popup) {
  popup.classList.remove("popup_is-animated");
  popup.classList.add("popup_is-opened");
  HandlerCloseByESC(popup);
  HandlerCloseByClick(popup);
}

function closeModal(popup) {
  popup.classList.add("popup_is-animated");
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeByESC);
  popup.removeEventListener("click", closeByClick);
}

function HandlerCloseByESC() {
  document.addEventListener("keydown", closeByESC);
}

function closeByESC(evt) {
  const popup = document.querySelector(".popup_is-opened");
  if (evt.key === "Escape") {
    closeModal(popup);
  }
}

function HandlerCloseByClick(popup) {
  popup.addEventListener("click", closeByClick);
}

function closeByClick(evt) {
  const popup = document.querySelector(".popup_is-opened");
  if (
    evt.target.classList.contains("popup") ||
    evt.target.classList.contains("popup__close")
  ) {
    closeModal(popup);
  }
}

export { openModal, closeModal };
