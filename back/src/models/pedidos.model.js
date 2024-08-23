import {DataTypes} from "sequelize";
import sequelize from "../config/db.js";
import Usuario from "./users.model.js";

const Pedido = sequelize.define(
  "Pedidos",
  {
    id_pedido: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    estado: {
      type: DataTypes.STRING,
      defaultValue: "Pendiente",
    },
  },
  {
    timestamps: true,
  }
);

Pedido.belongsTo(Usuario, {foreignKey: "id_usuario"});
Usuario.hasMany(Pedido, {foreignKey: "id_usuario"});

Pedido.sync();

export default Pedido;
