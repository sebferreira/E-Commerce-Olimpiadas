import express from "express";
import validateSchema from "../middlewares/validaciones.middleware.js";
import pedidosProductosSchema from "../schemas/pedido_productos.schema.js";

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
router.post("/", validateSchema(pedidosProductosSchema), crearPedido);
router.put("/", validateSchema(pedidosProductosSchema), actualizarPedido);
router.delete("/", borrarPedido);

export default router;
