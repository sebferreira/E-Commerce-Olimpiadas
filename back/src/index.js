import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import router from "./routes/user.routes.js";
import routerProductos from "./routes/productos.routes.js";
/* const express = require("express"); */
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
    methods: "GET,OPTIONS,PUT,PATCH,POST,DELETE",
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

app.use("/api", router);
app.use("/api/productos", routerProductos);

//para que devuelva el error si es que hay alguno
app.use((error, req, res, next) => {
  console.log(error);
  return res.status(404).json({
    message: error.message,
  });
});

app.listen(3000);
