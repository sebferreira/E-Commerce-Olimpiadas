import {DataTypes} from "sequelize";
import sequelize from "../config/db.js";

<<<<<<< HEAD
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
=======
const Producto = sequelize.define(
  "Productos",
  {
    id_producto: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    caracteristicas: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    deporte: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "unisex",
    },
    talle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  }
);
>>>>>>> 43d570266588eb9e9c7fcaffd1589d6016ff7d13

Producto.sync();

export default Producto;
