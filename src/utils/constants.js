export const content = document.querySelector(".content");
export const cardsContainer = content.querySelector(".places__list");
export const buttonOpenEditProfileForm = document.querySelector(
  ".profile__edit-button"
);
export const buttonOpenAddСardForm = document.querySelector(
  ".profile__add-button"
);
export const popupEditProfile = document.querySelector(".popup_type_edit");
export const popupAddСard = document.querySelector(".popup_type_new-card");
export const formAddCard = document.forms["new-place"];
export const placeName = formAddCard.elements["place-name"];
export const placeLink = formAddCard.elements.link;
export const profileForm = document.forms["edit-profile"];
export const newProfileName = profileForm.elements.name;
export const newProfileDescription = profileForm.elements.description;
export const profileName = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const popupTypeImage = document.querySelector(".popup_type_image");
export const popupImage = document.querySelector(".popup__image");
export const popupCaption = document.querySelector(".popup__caption");
export const avatarContainer = document.querySelector(
  ".profile__image-container"
);
export const popupAvatar = document.querySelector(".popup_type_avatar");
export const avatarForm = document.forms["edit-avatar"];
export const avatarFormLink = avatarForm.elements["avatar-link"];
export const profileImage = document.querySelector(".profile__image");
export const popupDeleteImage = document.querySelector(
  ".popup_type_delete-image"
);
export const cardTemplate = document.querySelector("#card-template").content;
export const formDeleteImage = document.forms["delete-image"];
export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
export const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-25",
  headers: {
    authorization: "1c33c7b1-0a31-4a81-aab4-8e1a70c57e3d",
    "Content-Type": "application/json",
  },
};
