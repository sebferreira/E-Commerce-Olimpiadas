import jwt from "jsonwebtoken";
import {config} from "dotenv";
import User from "../models/users.model.js";

config();

export async function revisarCookie(req, res, next) {
  try {
    /* const token = req.headers.authorization.split(" ")[1]; */
<<<<<<< HEAD
    let token = req.cookies.token_back;
    if (!token) {
      token = req.headers.authorization.split(" ")[1];
    }
=======
    const token = req.cookies.token_back;
    if (!token) {
      token = req.headers.authorization.split(" ")[1];
    }
    console.log(token);
>>>>>>> 6dcd7f02c18878f512b1207cf25ea9508dfcefb6
    if (!token) return res.status(401).json(["Unauthorized"]);
    jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
      if (err) return res.status(401).json(["Unauthorized"]);
      const email = decoded.email;
      const response = await User.findOne({where: {email}});
      const {password, ...user} = response._previousDataValues;
      req.user = user;
      next();
    });
  } catch (error) {
    res.status(401).json(["Unauthorized"]);
  }
}