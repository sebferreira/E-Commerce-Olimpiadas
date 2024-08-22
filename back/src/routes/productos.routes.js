import express from "express";
import validateSchema from "../middlewares/validaciones.middleware.js";
import productosSchema from "../schemas/productos.schema.js";

import {
  obtenerProductos,
  obtenerProductoPorId,
  obtenerProductoPorDeporte,
<<<<<<< HEAD
  crearProducto,
  actualizarProducto,
  borrarProducto,
=======
  crearProducto
>>>>>>> 43d570266588eb9e9c7fcaffd1589d6016ff7d13
} from "../controllers/productos.controller.js";

import {revisarCookie} from "../middlewares/authorization.middleware.js";

const router = express.Router();

router.get("/", obtenerProductos);
router.get("/:id", obtenerProductoPorId);
router.get("/:deporte", obtenerProductoPorDeporte);
<<<<<<< HEAD
router.post("/", validateSchema(productosSchema), crearProducto);
router.put("/", validateSchema(productosSchema), actualizarProducto);
router.delete("/", borrarProducto);
=======
router.post("/",validateSchema(productosSchema), crearProducto);
>>>>>>> 43d570266588eb9e9c7fcaffd1589d6016ff7d13

export default router;
