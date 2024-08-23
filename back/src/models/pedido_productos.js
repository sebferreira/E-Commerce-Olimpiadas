import {DataTypes} from "sequelize";
import sequelize from "../config/db.js";
import Pedido from "./pedidos.model.js";
import Producto from "./productos.model.js";

const PedidosProductos = sequelize.define("Pedidos de Productos", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  id_pedido: {
    type: DataTypes.INTEGER,
  },
  id_producto: {
    type: DataTypes.INTEGER,
  },
});

Pedido.belongsToMany(Producto, {
  through: PedidosProductos,
  foreignKey: "id_pedido",
});
Producto.belongsToMany(Pedido, {
  through: PedidosProductos,
  foreignKey: "id_producto",
});

PedidosProductos.belongsTo(Producto, {
  targetKey: "id_producto",
  foreignKey: "id_producto",
});
PedidosProductos.belongsTo(Pedido, {
  targetKey: "id_pedido",
  foreignKey: "id_pedido",
});

PedidosProductos.sync();

export default PedidosProductos;
