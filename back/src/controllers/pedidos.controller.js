import Pedido from "../models/pedidos.model.js";

export const obtenerPedidos = async (req, res) => {
  try {
    const user = req.user;

    if (user.rol != "admin") {
      return res.status(401).json(["Unauthorized"]);
    }

    const pedidos = await Pedido.findAll();

    if (pedidos.length <= 0) {
      return res.status(404).json(["Aqui no hay pedidos"]);
    }

    res.status(200).json(pedidos);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};

export const obtenerPedidoPorId = async (req, res) => {
  try {
    const {id_pedido} = req.params;
    const pedido = await pedido.findByPk(id_pedido);

    if (!pedido) {
      return res.status(404).json(["El pedido buscado no existe"]);
    }

    res.status(200).json(pedido);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};

export const obtenerPedidosPorUsuario = async (req, res) => {
  try {
    // const user = req.user;

    // if (!user) {
    //   return res.status(401).json(["Unauthorized"]);
    // }

    const {id_usuario} = req.params;
    const pedidos = await Pedido.findAll({where: {id_usuario}});

    if (!pedidos) {
      return res.status(404).json(["El usuario no tiene pedidos"]);
    }

    res.status(200).json(pedidos);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};

export const crearPedido = async (req, res) => {
  try {
    //
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};

export const borrarPedido = async (req, res) => {
  try {
    //
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};
