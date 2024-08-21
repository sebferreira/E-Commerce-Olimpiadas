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
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING,
      defaultValue: "user",
      allowNull: true,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    direccion_calle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    direccion_numero: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    direccion_ciudad: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    direccion_provincia: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    direccion_codigo_postal: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    direccion_piso: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    direccion_dpto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

User.sync();

export default User;
