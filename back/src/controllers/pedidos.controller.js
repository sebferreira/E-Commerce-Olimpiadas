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

export const crearPedido = async (req, res) => {
  try {
    const user = req.user;

    const {estado} = req.body;

    const nuevopedido = await Pedido.create({estado});

    const pedidoGuardado = await nuevopedido.save();

    res.status(200).json(pedidoGuardado);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};

export const actualizarPedido = async (req, res) => {
  try {
    const user = req.user;

    if (user.rol != "admin") {
      return res.status(401).json(["Unauthorized"]);
    }

    const {id} = req.params;

    const pedido = await pedido.findByPk(id);
    if (!pedido) {
      return res.status(404).json(["El pedido buscado no existe"]);
    }

    const {
      caracteristicas,
      descripcion,
      deporte,
      tipo,
      genero,
      talle,
      precio,
      stock,
    } = req.body;

    await pedido.update({
      caracteristicas,
      descripcion,
      deporte,
      tipo,
      genero,
      talle,
      precio,
      stock,
    });

    res.status(200).json(pedido);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};

export const borrarPedido = async (req, res) => {
  try {
    const user = req.user;

    if (user.rol != "admin") {
      return res.status(401).json(["Unauthorized"]);
    }

    const {id} = req.params;

    const pedido = await pedido.findByPk(id);
    if (!pedido) {
      return res.status(404).json(["El pedido buscado no existe"]);
    }

    const pedidoEliminado = pedido;

    await pedido.destroy();

    res.status(200).json(pedidoEliminado);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};
