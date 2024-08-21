import {DataTypes} from "sequelize";
import sequelize from "../config/db.js";
import Usuario from "./users.model.js";

const MetodoPago = sequelize.define("Metodos_de_pago", {
  cod_tarjeta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  num_tarjeta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  f_vencimiento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

MetodoPago.belongsTo(Usuario, {foreignKey: "id_usuario"});
Usuario.hasMany(MetodoPago, {foreignKey: "id_usuario"});

MetodoPago.sync();

export default MetodoPago;
