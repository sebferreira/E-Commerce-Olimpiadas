import express from "express";
import validateSchema from "../middlewares/validaciones.middleware.js";

import {
  obtenerPedidos,
  obtenerPedidoPorId,
  obtenerPedidosPorUsuario,
  crearPedido,
  actualizarPedido,
  actualizarUnPedido,
  borrarPedido,
  contarPlataPedido,
} from "../controllers/pedidos_productos.controller.js";

import {revisarCookie} from "../middlewares/authorization.middleware.js";
import {pedidosProductosSchema} from "../schemas/pedidos_productos.schema.js";

const router = express.Router();

router.get("/", obtenerPedidos);
router.get("/:id", obtenerPedidoPorId);
router.get("/usuario/:id_usuario", obtenerPedidosPorUsuario);
router.post(
  "/:id_usuario",
  validateSchema(pedidosProductosSchema),
  crearPedido
);
router.put("/:id_usuario", actualizarPedido);
router.get("/contar/:id_pedido", contarPlataPedido);
router.put("/:id_pedido", borrarPedido);
router.delete("/:id_pedido", borrarPedido);

export default router;
