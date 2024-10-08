import {DataTypes} from "sequelize";
import sequelize from "../config/db.js";
import Usuario from "./users.model.js";

const MetodoPago = sequelize.define("Metodos_de_pago", {
  id_MetodoPago: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cod_tarjeta: {
    type: DataTypes.INTEGER,
  },
  num_tarjeta: {
    type: DataTypes.STRING,
  },
  f_vencimiento: {
    type: DataTypes.STRING,
  },
  banco: {
    type: DataTypes.STRING,
  },
});

MetodoPago.belongsTo(Usuario, {foreignKey: "id_usuario"});
Usuario.hasMany(MetodoPago, {foreignKey: "id_usuario"});

MetodoPago.sync();

export default MetodoPago;
