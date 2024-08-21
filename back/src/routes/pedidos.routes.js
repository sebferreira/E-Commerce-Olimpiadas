import express from "express";
import validateSchema from "../middlewares/validaciones.middleware.js";
import {} from "../controllers/pedidos.controller.js";
import {revisarCookie} from "../middlewares/authorization.middleware.js";

const router = express.Router();

router.post("/register");
router.post("/login");
router.post("/logout");
router.get("/verify");
router.get("/profile");

export default router;
