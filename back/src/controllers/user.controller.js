import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/users.model.js";
import {config} from "dotenv";
config();
const salt = Number(process.env.SALT);

export const registerUser = async (req, res, next) => {
  try {
    const {nombre, apellido, telefono, dni, email, password, confirmar, rol} =
      req.body;
    if (password !== confirmar) {
      return res.status(400).json(["Las contraseñas no coinciden"]);
    }
    const userFound = await User.findOne({where: {email}});
    if (userFound) {
      return res.status(400).json(["El usuario ya existe"]);
    }
    const userFound2 = await User.findOne({where: {dni}});
    if (userFound2) {
      return res.status(400).json(["El usuario ya existe"]);
    }
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      nombre,
      apellido,
      dni,
      telefono,
      email,
      rol,
      password: hashedPassword,
    });
    const userSaved = await newUser.save();
    res.json(userSaved);
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const {email, password: passwordSended} = req.body;
    const userFound = await User.findOne({where: {email}});
    if (!userFound) {
      return res.status(401).json(["User not found"]);
    }
    const isMatch = bcrypt.compareSync(passwordSended, userFound.password);
    if (!isMatch) {
      return res.status(404).json(["Contraseña incorrecta"]);
    }
    const {password, ...user} = userFound._previousDataValues;

    const token = jwt.sign(user, process.env.SECRET_KEY, {});
    const cookieOption = {
      expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      secure: true,
      sameSite: "none",
      domain: process.env.DOMAIN,
      maxAge: Date.now() + 1000 * 60 * 30,
    };
    res.cookie("token_back", token, cookieOption);
    res.json({user, token});
  } catch (error) {
    next(error);
  }
};
export const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.json({message: "Logged out successfully"});
};
export const profileUser = (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(401).json(["Unauthorized"]);
  }
  res.json(user);
};

export const verifyToken = async (req, res) => {
  const token = req.cookies.token_back;
  if (!token) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) return res.status(401).json(["Unauthorized"]);
  jwt.verify(token, process.env.SECRET_KEY, async (err, user) => {
    if (err) return res.status(401).json(["Unauthorized"]);
    console.log(user.email);
    const email = user.email;
    const userFound = await User.findOne({where: {email}});
    if (!userFound) return res.status(401).json(["Unauthorized"]);
    console.log(userFound._previousDataValues);

    return res.json(userFound._previousDataValues);
  });
};

export const getPedidos = async (req, res) => {
  const user = req.user;
  return res.json({
    message: "pedido del usuario",
    user: user,
  });
};
export const insertAddress = async (req, res) => {
  const user = req.user;
  const {
    direccion_calle,
    direccion_numero,
    direccion_ciudad,
    direccion_provincia,
    direccion_codigo_postal,
    direccion_piso,
    direccion_dpto,
  } = req.body;
  if (!user) {
    return res.status(401).json(["Unauthorized"]);
  }
  const usuarioBD = await User.findByPk(user.id_usuario);
  if (!usuarioBD) {
    return res.status(404).json(["Usuario no encontrado"]);
  }
  const newUser = await usuarioBD.update({
    direccion_calle,
    direccion_numero,
    direccion_ciudad,
    direccion_provincia,
    direccion_codigo_postal,
    direccion_piso,
    direccion_dpto,
  });

  console.log(newUser);

  res.status(200).json(newUser);
};
