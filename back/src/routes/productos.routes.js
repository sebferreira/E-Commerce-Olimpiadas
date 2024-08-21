import express from "express";
import validateSchema from "../middlewares/validaciones.middleware.js";

import {
  obtenerProductos,
  obtenerProductoPorId,
  obtenerProductoPorDeporte,
} from "../controllers/productos.controller.js";

import {revisarCookie} from "../middlewares/authorization.middleware.js";

const router = express.Router();

router.get("/", obtenerProductos);
router.get("/:id", obtenerProductoPorId);
router.get("/:deporte", obtenerProductoPorDeporte);

export default router;
