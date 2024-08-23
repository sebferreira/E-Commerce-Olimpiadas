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
function crearProductos(body) {
  return handleCustomApiRequest({
    url: `${URL}/productos/`,
    method: "POST",
    body,
    withToken: true,
  });
}
function borrarProductos(id_producto) {
  return handleCustomApiRequest({
    url: `${URL}/productos/${id_producto}`,
    method: "DELETE",
    withToken: true,
  });
}
function actualizarProductos(body, id_producto) {
  return handleCustomApiRequest({
    url: `${URL}/productos/${id_producto}`,
    method: "PUT",
    body,
    withToken: true,
  });
}
function insertarDireccion(body) {
  return handleCustomApiRequest({
    url: `${URL}/direccion`,
    method: "PUT",
    body,
    withToken: true,
  });
}
function insertarMetodoPago(body, id_usuario) {
  return handleCustomApiRequest({
    url: `${URL}/MetodoPago/${id_usuario}`,
    method: "POST",
    body,
    withToken: true,
  });
}
function insertarPedido(body, id_usuario) {
  return handleCustomApiRequest({
    url: `${URL}/pedidos/${id_usuario}`,
    method: "POST",
    body,
    withToken: true,
  });
}
function pedidosDelUsuario(id_usuario) {
  return handleCustomApiRequest({
    url: `${URL}/pedidos/usuario/${id_usuario}`,
    method: "GET",
    withToken: true,
  });
}
function borrarPedido(id_pedido) {
  return handleCustomApiRequest({
    url: `${URL}/pedidos/${id_pedido}`,
    method: "DELETE",
    withToken: true,
  });
}
function actualizarByMetodoPago(id_usuario) {
  return handleCustomApiRequest({
    url: `${URL}/pedidos/${id_usuario}`,
    method: "PUT",
    withToken: true,
  });
}
function actualizarEstadoPedido(body, id_pedido) {
  return handleCustomApiRequest({
    url: `${URL}/pedidos/admin/${id_pedido}`,
    method: "PUT",
    body,
    withToken: true,
  });
}
function obtenerTodosPedidosAdmin() {
  return handleCustomApiRequest({
    url: `${URL}/pedidos/`,
    method: "GET",
    withToken: true,
  });
}
export {
  verifyCookies,
  signIn,
  signUp,
  userLogout,
  getAllProducts,
  getAllProductsByGender,
  getAllProductsBySport,
  obtenerTodosPedidosAdmin,
  pedidosDelUsuario,
  crearProductos,
  actualizarProductos,
  actualizarByMetodoPago,
  actualizarEstadoPedido,
  insertarDireccion,
  insertarMetodoPago,
  insertarPedido,
  borrarProductos,
  borrarPedido,
};
