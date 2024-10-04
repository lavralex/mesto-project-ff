const profileForm = document.forms["edit-profile"];
const newProfileName = profileForm.elements.name;
const newProfileDescription = profileForm.elements.description;
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

function changeProfileInfo(evt) {
  evt.preventDefault();
  profileName.textContent = newProfileName.value;
  profileDescription.textContent = newProfileDescription.value;
  newProfileName.value = "";
  newProfileDescription.value = "";
}

export default function listenProfileSubmit() {
  profileForm.addEventListener("submit", changeProfileInfo);
}
