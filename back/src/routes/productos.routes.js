import express from "express";
import validateSchema from "../middlewares/validaciones.middleware.js";
import productosSchema from "../schemas/productos.schema.js";

import {
  obtenerProductos,
  obtenerProductoPorId,
  obtenerProductoPorDeporte,
  crearProducto,
  actualizarProducto,
  borrarProducto,
  obtenerProductoPorGenero,
} from "../controllers/productos.controller.js";

import {revisarCookie} from "../middlewares/authorization.middleware.js";

const router = express.Router();

router.get("/", obtenerProductos);
router.get("/:id", obtenerProductoPorId);
router.get("/deporte/:deporte", obtenerProductoPorDeporte);
router.get("/genero/:genero", obtenerProductoPorGenero);
router.post("/", validateSchema(productosSchema), crearProducto);
router.put("/:id", validateSchema(productosSchema), actualizarProducto);
router.delete("/:id", borrarProducto);

export default router;
