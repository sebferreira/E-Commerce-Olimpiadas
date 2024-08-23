import express from "express";
import validateSchema from "../middlewares/validaciones.middleware.js";
import {registerSchema, loginSchema} from "../schemas/user.schema.js";
import {
  registerUser,
  loginUser,
  logoutUser,
  profileUser,
  verifyToken,
  insertAddress,
} from "../controllers/user.controller.js";
import {revisarCookie} from "../middlewares/authorization.middleware.js";

const router = express.Router();

router.post("/register", validateSchema(registerSchema), registerUser);
router.post("/login", validateSchema(loginSchema), loginUser);
router.post("/logout", logoutUser);
router.get("/verify", verifyToken);
router.get("/profile", revisarCookie, profileUser);
router.put("/direccion", revisarCookie, insertAddress);

export default router;
