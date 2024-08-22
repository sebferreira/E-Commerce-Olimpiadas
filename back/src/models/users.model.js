import {DataTypes} from "sequelize";
import sequelize from "../config/db.js";

const User = sequelize.define(
  "Users",
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    dni: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    apellido: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    rol: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
    telefono: {
      type: DataTypes.STRING,
    },
    direccion_calle: {
      type: DataTypes.STRING,
    },
    direccion_numero: {
      type: DataTypes.INTEGER,
    },
    direccion_ciudad: {
      type: DataTypes.STRING,
    },
    direccion_provincia: {
      type: DataTypes.STRING,
    },
    direccion_codigo_postal: {
      type: DataTypes.STRING,
    },
    direccion_piso: {
      type: DataTypes.INTEGER,
    },
    direccion_dpto: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

User.sync();

export default User;
