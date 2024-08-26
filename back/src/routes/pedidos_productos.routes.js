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
  actualizarCantidadPedido,
  obtenerCompletadosPorUsuario,
  obtenerTodosLosCompletados,
  obtenerFacturas,
} from "../controllers/pedidos_productos.controller.js";

import {revisarCookie} from "../middlewares/authorization.middleware.js";
import {pedidosProductosSchema} from "../schemas/pedidos_productos.schema.js";

const router = express.Router();

router.get("/todos", obtenerPedidos);
router.get("/:id", obtenerPedidoPorId);
router.get("/usuario/:id_usuario", obtenerPedidosPorUsuario);
router.get("/completados/:id_usuario", obtenerCompletadosPorUsuario);
router.get("/TodosCompletados/admin", obtenerTodosLosCompletados);
router.get("/facturas/:id_usuario", obtenerFacturas);
router.post(
  "/:id_usuario",
  validateSchema(pedidosProductosSchema),
  crearPedido
);
router.put("/:id_usuario", actualizarPedido);
router.get("/contar/:id_pedido", contarPlataPedido);
router.put("/:id_pedido", borrarPedido);
router.put("/admin/:id_pedido", actualizarUnPedido);
router.put("/usuario/:id_pedido", actualizarCantidadPedido);
router.delete("/:id_pedido", borrarPedido);

export default router;
