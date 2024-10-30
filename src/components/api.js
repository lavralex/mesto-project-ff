const config = {
  authorization: {
    token: "1c33c7b1-0a31-4a81-aab4-8e1a70c57e3d",
    cohortId: "wff-cohort-25",
  },
  baseUrl: "https://nomoreparties.co/v1",
  "Content-Type": "application/json",
};

function makeEndpoint(endpoint) {
  return `${config.baseUrl}/${config.authorization.cohortId}${endpoint}`;
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

function get(endpoint) {
  return fetch(makeEndpoint(endpoint), {
    headers: {
      authorization: config.authorization.token,
    },
  }).then((res) => {
    return checkResponse(res);
  });
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
  return fetch(makeEndpoint("/users/me"), {
    method: "PATCH",
    headers: {
      authorization: config.authorization.token,
      "Content-Type": config["Content-Type"],
    },
    body: JSON.stringify({
      name: profileInfo.name,
      about: profileInfo.about,
    }),
  }).then((res) => {
    return checkResponse(res);
  });
}

function patchAvatar(avatarLink) {
  return fetch(makeEndpoint("/users/me/avatar"), {
    method: "PATCH",
    headers: {
      authorization: config.authorization.token,
      "Content-Type": config["Content-Type"],
    },
    body: JSON.stringify({
      avatar: avatarLink,
    }),
  }).then((res) => {
    return checkResponse(res);
  });
}

function postCard(name, link) {
  return fetch(makeEndpoint("/cards"), {
    method: "POST",
    headers: {
      authorization: config.authorization.token,
      "Content-Type": config["Content-Type"],
    },
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then((res) => {
    return checkResponse(res);
  });
}

function deleteCardAPI(cardId) {
  return fetch(makeEndpoint(`/cards/${cardId}`), {
    method: "DELETE",
    headers: {
      authorization: config.authorization.token,
    },
  }).then((res) => {
    return checkResponse(res);
  });
}

function switchLike(cardId, method) {
  return fetch(makeEndpoint(`/cards/likes/${cardId}`), {
    method: method,
    headers: {
      authorization: config.authorization.token,
    },
  }).then((res) => {
    return checkResponse(res);
  });
}

export {
  getSrartData,
  patchProfile,
  patchAvatar,
  switchLike,
  postCard,
  deleteCardAPI,
};
