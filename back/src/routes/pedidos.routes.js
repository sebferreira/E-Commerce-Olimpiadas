import express from "express";
import validateSchema from "../middlewares/validaciones.middleware.js";
import pedidosSchema from "../schemas/pedidos.schema.js";

import {
  obtenerPedidos,
  obtenerPedidoPorId,
  obtenerPedidosPorUsuario,
  crearPedido,
  actualizarPedido,
  borrarPedido,
} from "../controllers/pedidos.controller.js";

import {revisarCookie} from "../middlewares/authorization.middleware.js";

const router = express.Router();

router.get("/", obtenerPedidos);
router.get("/:id", obtenerPedidoPorId);
router.get("/usuario/:id_usuario", obtenerPedidosPorUsuario);
router.post("/", validateSchema(pedidosSchema), crearPedido);
router.put("/", validateSchema(pedidosSchema), actualizarPedido);
router.delete("/", borrarPedido);

export default router;
