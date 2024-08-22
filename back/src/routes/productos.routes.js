import express from "express";
import validateSchema from "../middlewares/validaciones.middleware.js";
import productosSchema from "../schemas/productos.schema.js";

import {
  obtenerProductos,
  obtenerProductoPorId,
  obtenerProductoPorDeporte,
  crearProducto
} from "../controllers/productos.controller.js";

import {revisarCookie} from "../middlewares/authorization.middleware.js";

const router = express.Router();

router.get("/", obtenerProductos);
router.get("/:id", obtenerProductoPorId);
router.get("/:deporte", obtenerProductoPorDeporte);
router.post("/",validateSchema(productosSchema), crearProducto);

export default router;
