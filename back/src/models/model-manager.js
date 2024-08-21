import User from "./users.model.js";
import Producto from "./productos.model.js";
import MetodoPago from "./metodo_pago.model.js";
import Pedido from "./pedidos.model.js";
import PedidosProductos from "./pedido_productos.js";

User.sync();
Producto.sync();
MetodoPago.sync();
Pedido.sync();
PedidosProductos.sync();
