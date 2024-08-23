import PedidosProductos from "../models/pedido_productos.js";
import Pedidos from "../models/pedidos.model.js";
import Producto from "../models/productos.model.js";

export const obtenerPedidos = async (req, res) => {
  try {
    const pedidos = await Pedidos.findAll({
      include: [
        {
          model: Producto,
          through: {attributes: ["cantidad"]},
        },
      ],
    });

    if (!pedidos || pedidos.length === 0) {
      return res.status(404).json(["El usuario no tiene pedidos"]);
    }

    res.status(200).json(pedidos);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};

export const obtenerPedidoPorId = async (req, res) => {
  try {
    //
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};

export const obtenerPedidosPorUsuario = async (req, res) => {
  try {
    const {id_usuario} = req.params;
    //pasame cantidad, id_pedido, id_producto, descripcion del producto,
    const pedidos = await Pedidos.findAll({
      where: {id_usuario},
      include: [
        {
          model: Producto,
          through: {attributes: ["cantidad"]},
        },
      ],
    });

    if (!pedidos || pedidos.length === 0) {
      return res
        .status(404)
        .json({message_error: "El usuario no tiene pedidos"});
    }

    res.status(200).json(pedidos);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};

export const crearPedido = async (req, res) => {
  try {
    const {id_usuario} = req.params;
    const {cantidad, id_producto} = req.body;

    const pedido = await Pedidos.create({id_usuario});
    const id_pedido = pedido.id_pedido;

    const pedidoProducto = await PedidosProductos.create({
      cantidad,
      id_pedido,
      id_producto,
    });

    res.status(200).json(pedidoProducto);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};

export const borrarPedido = async (req, res) => {
  try {
    const {id_pedido} = req.params;

    const pedido = await Pedidos.findByPk(id_pedido);

    if (!pedido) {
      return res.status(404).json(["El pedido no existe"]);
    }

    await PedidosProductos.destroy({where: {id_pedido}});
    await Pedidos.destroy({where: {id_pedido}});

    res.status(200).json(["El pedido ha sido eliminado exitosamente"]);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};

export const actualizarPedido = async (req, res) => {
  try {
    const {id_usuario} = req.params;

    const pedidos = await Pedidos.findAll({
      where: {
        id_usuario,
        estado: "Pendiente",
      },
    });

    if (!pedidos || pedidos.length === 0) {
      return res
        .status(404)
        .json(["No hay pedidos pendientes para este usuario"]);
    }

    await Pedidos.update(
      {estado: "Pendiente de entrega"},
      {
        where: {
          id_usuario,
          estado: "Pendiente",
        },
      }
    );

    res.status(200).json(["Pedidos actualizados exitosamente"]);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};

export const actualizarUnPedido = async (req, res) => {
  try {
    // const user = req.user;

    // if (user.rol != "admin") {
    //   return res.status(401).json(["Unauthorized"]);
    // }

    const {id_pedido} = req.params;
    const {estado} = req.body;

    const pedido = await Pedidos.findByPk(id_pedido);

    if (!pedido || pedido.length === 0) {
      return res.status(404).json(["No existe este pedido"]);
    }

    await Pedidos.update(
      {estado},
      {
        where: {
          id_pedido,
        },
      }
    );

    res.status(200).json(["Pedidos actualizados exitosamente"]);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};

export const contarPlataPedido = async (req, res) => {
  try {
    const {id_pedido} = req.params;

    const pedido = await Pedidos.findByPk(id_pedido);

    if (!pedido) {
      return res.status(404).json(["El pedido no existe"]);
    }

    const productosPedidos = await PedidosProductos.findAll({
      where: {id_pedido},
      include: [
        {
          model: Producto,
          attributes: ["precio"],
        },
      ],
    });

    const montoTotal = 0;

    productosPedidos.forEach((producto) => {
      const precio = producto.Producto.precio;
      const cantidad = producto.cantidad;
      montoTotal += precio * cantidad;
    });

    res.status(200).json({montoTotal});
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};
