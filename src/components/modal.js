const ButtonEditProfile = document.querySelector(".profile__edit-button");
const buttonAddСard = document.querySelector(".profile__add-button");
const popupEdit = document.querySelector(".popup_type_edit");
const popupAddСard = document.querySelector(".popup_type_new-card");
const popupsWithForm = [popupEdit, popupAddСard];

const popupsButtons = [
  {
    popup: popupEdit,
    button: ButtonEditProfile,
    buttonClass: "profile__edit-button",
  },
  {
    popup: popupAddСard,
    button: buttonAddСard,
    buttonClass: "profile__add-button",
  },
];

function initiateHidePopup(popup) {
  function hidePopup() {
    popup.classList.add("popup_is-animated");
    popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", hidePopupByKeydown);
    popup.removeEventListener("click", listenClick);
    if (popupsWithForm.includes(popup)) {
      popup.removeEventListener("submit", hidePopupBySubmit);
    }
  }

  function hidePopupBySubmit() {
    hidePopup();
  }

  function listenSubmitToHide() {
    popup.addEventListener("submit", hidePopupBySubmit);
  }

  function hidePopupByKeydown(evt) {
    if (evt.key === "Escape") {
      hidePopup();
    }
  }

  function listenKeydown() {
    document.addEventListener("keydown", hidePopupByKeydown);
  }

  function hidePopupByClick(evt) {
    if (
      evt.target.classList.contains("popup") ||
      evt.target.classList.contains("popup__close")
    ) {
      hidePopup();
    }
  }

  function listenClick() {
    popup.addEventListener("click", hidePopupByClick);
  }

  listenClick();
  listenKeydown();
  if (popupsWithForm.includes(popup)) {
    listenSubmitToHide();
  }
}

function openPopup(popupInfo) {
  popupInfo.button.addEventListener("click", function (evt) {
    if (evt.target.classList.contains(popupInfo.buttonClass)) {
      if (popupInfo.functional) {
        popupInfo.functional(evt.target);
      }
      popupInfo.popup.classList.remove("popup_is-animated");
      popupInfo.popup.classList.add("popup_is-opened");
      initiateHidePopup(popupInfo.popup);
    }
  });
}

function initPopups() {
  popupsButtons.forEach((item) => {
    openPopup(item);
  });
}

export { initPopups, openPopup };
