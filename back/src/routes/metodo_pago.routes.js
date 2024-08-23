import express from "express";
import validateSchema from "../middlewares/validaciones.middleware.js";
import {revisarCookie} from "../middlewares/authorization.middleware.js";
import {crearPago} from "../controllers/metodo_pago.controller.js";
import {metodoPagoSchema} from "../schemas/metodo_pago.schema.js";

const MProuter = express.Router();

MProuter.post(
  "/:id_usuario",
  validateSchema(metodoPagoSchema),
  revisarCookie,
  crearPago
);

export default MProuter;
