import {handleCustomApiRequest} from "./../shared/clientShared.js";

const URL = "http://localhost:3000/api";

function verifyCookies() {
  return handleCustomApiRequest({
    url: `${URL}/verify`,
    method: "GET",
    withToken: true,
  });
}

function signIn(body) {
  return handleCustomApiRequest({
    url: `${URL}/login`,
    method: "POST",
    body,
  });
}
function signUp(body) {
  return handleCustomApiRequest({
    url: `${URL}/register`,
    method: "POST",
    body,
  });
}
function userLogout() {
  return handleCustomApiRequest({
    url: `${URL}/logout`,
    method: "POST",
    withToken: true,
  });
}
function getAllProducts() {
  return handleCustomApiRequest({
    url: `${URL}/productos`,
    method: "GET",
    withToken: true,
  });
}
function getAllProductsByGender(gender) {
  return handleCustomApiRequest({
    url: `${URL}/productos/genero/${gender}`,
    method: "GET",
    withToken: true,
  });
}
function getAllProductsBySport(sport) {
  return handleCustomApiRequest({
    url: `${URL}/productos/deporte/${sport}`,
    method: "GET",
    withToken: true,
  });
}


export {verifyCookies, signIn, signUp, userLogout, getAllProducts, getAllProductsByGender, getAllProductsBySport};
