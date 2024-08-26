import PedidosProductos from "../models/pedido_productos.js";
import Pedidos from "../models/pedidos.model.js";
import Producto from "../models/productos.model.js";
import {Op} from "sequelize";

export const obtenerPedidos = async (req, res) => {
  try {
    const pedidos = await Pedidos.findAll({
      where: {
        estado: {
          [Op.or]: ["Pendiente", "Pendiente de entrega"],
        },
      },
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
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};

export const obtenerPedidosPorUsuario = async (req, res) => {
  try {
    const {id_usuario} = req.params;

    const pedidos = await Pedidos.findAll({
      where: {
        id_usuario,
        estado: {
          [Op.or]: ["Pendiente", "Pendiente de entrega"],
        },
      },
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

export const obtenerCompletadosPorUsuario = async (req, res) => {
  try {
    const {id_usuario} = req.params;

    const pedidos = await Pedidos.findAll({
      where: {id_usuario, estado: "Completado"},
      include: [
        {
          model: Producto,
          through: {attributes: ["cantidad"]},
        },
      ],
    });

    if (!pedidos || pedidos.length === 0) {
      return res.status(404).json(["El usuario no tiene pedidos completados"]);
    }

    res.status(200).json(pedidos);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};

export const obtenerTodosLosCompletados = async (req, res) => {
  try {
    const pedidos = await Pedidos.findAll({
      where: {estado: "Completado"},
      include: [
        {
          model: Producto,
          through: {attributes: ["cantidad"]},
        },
      ],
    });

    if (!pedidos || pedidos.length === 0) {
      return res.status(404).json(["No hay tiene pedidos completados"]);
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

    const existeProducto = await PedidosProductos.findOne({
      where: {id_producto},
      include: [
        {
          model: Pedidos,
          where: {id_usuario, estado: "Pendiente"},
        },
      ],
    });

    if (existeProducto) {
      const producto = await Producto.findByPk(id_producto);
      const nuevaCantidad = existeProducto.cantidad + cantidad;

      if (nuevaCantidad > producto.stock) {
        return res.status(400).json(["La cantidad supera el stock disponible"]);
      }

      existeProducto.cantidad = nuevaCantidad;
      await existeProducto.save();

      return res.status(200).json(existeProducto);
    } else {
      const pedidoProducto = await PedidosProductos.create({
        cantidad,
        id_pedido,
        id_producto,
      });
      return res.status(200).json(pedidoProducto);
    }
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
    const {id_pedido} = req.params;
    const {estado} = req.body;

    const pedido = await PedidosProductos.findByPk(id_pedido, {
      include: [
        {
          model: Producto, 
          attributes: ["id_producto", "stock"],
        },
      ],
    });

    if (!pedido || pedido.length === 0) {
      return res.status(404).json(["No existe este pedido"]);
    }

    const cantidadPedida = pedido.cantidad;
    const stockProducto = pedido.Producto.stock;
    const id_producto = pedido.Producto.id_producto;

    if (estado === "Completado" && cantidadPedida > stockProducto) {
      return res.status(400).json(["La cantidad pedida supera al stock"]);
    } else if (estado === "Completado" && cantidadPedida <= stockProducto) {
      stockProducto = stockProducto - cantidadPedida;
      await Producto.update(
        {stock: stockProducto},
        {
          where: {
            id_producto,
          },
        }
      );
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

export const actualizarCantidadPedido = async (req, res) => {
  try {
    const {id_pedido} = req.params;
    const {nuevaCantidad} = req.body;

    const pedido = await Pedidos.findByPk(id_pedido);
    if (!pedido) {
      return res.status(404).json(["El pedido no existe"]);
    }

    const productoPedido = await PedidosProductos.findOne({
      where: {id_pedido},
      include: [
        {
          model: Producto,
          attributes: ["stock"],
        },
      ],
    });

    const stockDisponible = productoPedido.Producto.stock;

    if (nuevaCantidad > stockDisponible) {
      return res
        .status(400)
        .json([
          `La cantidad solicitada excede el stock disponible. Stock disponible: ${stockDisponible}`,
        ]);
    }

    productoPedido.cantidad = nuevaCantidad;
    await productoPedido.save();

    res.status(200).json(["Cantidad actualizada exitosamente"]);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};

export const obtenerFacturas = async (req, res) => {
  try {
    const {id_usuario} = req.params;

    const pedidos = await Pedidos.findAll({
      where: {
        estado: "Pendiente",
        id_usuario,
      },
      order: [["createdAt", "ASC"]],
      include: [
        {
          model: PedidosProductos,
          include: [
            {
              model: Producto,
              attributes: ["descripcion", "precio"],
            },
          ],
          attributes: ["cantidad"],
        },
      ],
    });

    if (!pedidos || pedidos.length === 0) {
      return res.status(404).json(["No hay pedidos pendientes de entrega"]);
    }

    res.status(200).json(pedidos);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};
