function openModal(popup) {
  popup.classList.remove("popup_is-animated");
  popup.classList.add("popup_is-opened");
  setCloseByEscListener(popup);
  setCloseByOverlayClickListener(popup);
}

function closeModal(popup) {
  popup.classList.add("popup_is-animated");
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeByESC);
  popup.removeEventListener("click", closeByClick);
}

function setCloseByEscListener() {
  document.addEventListener("keydown", closeByESC);
}

function closeByESC(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened");
    closeModal(popup);
  }
}

function setCloseByOverlayClickListener(popup) {
  popup.addEventListener("click", closeByClick);
}

function closeByClick(evt) {
  if (
    evt.target.classList.contains("popup") ||
    evt.target.classList.contains("popup__close")
  ) {
    const popup = document.querySelector(".popup_is-opened");
    closeModal(popup);
  }
}

export { openModal, closeModal };
