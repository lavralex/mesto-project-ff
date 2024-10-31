import { config } from "../utils/constants.js";

function makeEndpoint(endpoint) {
  return `${config.baseUrl}${endpoint}`;
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

function request(url, options) {
  return fetch(url, options).then((res) => {
    return checkResponse(res);
  });
}

function get(endpoint) {
  const options = {
    headers: config.headers,
  };
  return request(makeEndpoint(endpoint), options);
}

async function getSrartData() {
  const [userResult, cardsResult] = await Promise.all([
    get("/users/me"),
    get("/cards"),
  ]);
  const result = {
    user: userResult,
    cards: cardsResult,
  };
  return result;
}

function patchProfile(profileInfo) {
  const options = {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: profileInfo.name,
      about: profileInfo.about,
    }),
  };
  return request(makeEndpoint("/users/me"), options);
}

function patchAvatar(avatarLink) {
  const options = {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarLink,
    }),
  };
  return request(makeEndpoint("/users/me/avatar"), options);
}

function postCard(name, link) {
  const options = {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  };
  return request(makeEndpoint("/cards"), options);
}

function deleteCardAPI(cardId) {
  const options = {
    method: "DELETE",
    headers: config.headers,
  };
  return request(makeEndpoint(`/cards/${cardId}`), options);
}

function switchLike(cardId, method) {
  const options = {
    method: method,
    headers: config.headers,
  };
  return request(makeEndpoint(`/cards/likes/${cardId}`), options);
}

export {
  getSrartData,
  patchProfile,
  patchAvatar,
  switchLike,
  postCard,
  deleteCardAPI,
};
