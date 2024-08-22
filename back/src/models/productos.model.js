import {DataTypes} from "sequelize";
import sequelize from "../config/db.js";

const Producto = sequelize.define("Productos", {
  id_producto: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  caracteristicas: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  deporte: {
    type: DataTypes.STRING,
  },
  tipo: {
    type: DataTypes.STRING,
  },
  genero: {
    type: DataTypes.STRING,
    defaultValue: "unisex",
  },
  talle: {
    type: DataTypes.STRING,
  },
  precio: {
    type: DataTypes.INTEGER,
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

Producto.sync();

export default Producto;
