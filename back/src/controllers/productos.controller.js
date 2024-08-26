import {Op} from "sequelize";
import Producto from "../models/productos.model.js";

export const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();

    if (productos.length <= 0) {
      return res.status(404).json(["Aqui no hay productos"]);
    }

    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};

export const obtenerProductoPorId = async (req, res) => {
  try {
    const {id} = req.params;
    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json(["El producto buscado no existe"]);
    }

    res.status(200).json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};

export const obtenerProductoPorDeporte = async (req, res) => {
  try {
    const {deporte} = req.params;
    const productos = await Producto.findAll({where: {deporte: deporte}});

    if (productos.length <= 0) {
      return res
        .status(404)
        .json({message_error: "No se encontraron productos"});
    }

    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};

export const obtenerProductoPorGenero = async (req, res) => {
  try {
    const {genero} = req.params;
    const productos = await Producto.findAll({
      where: {
        [Op.or]: [{genero: genero}, {genero: "unisex"}],
      },
    });

    if (productos.length <= 0) {
      return res
        .status(404)
        .json({message_error: "No se encontraron productos"});
    }

    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};

export const crearProducto = async (req, res) => {
  try {
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

    const nuevoProducto = await Producto.create({
      caracteristicas,
      descripcion,
      deporte,
      tipo,
      genero,
      talle,
      precio,
      stock,
    });

    const productoGuardado = await nuevoProducto.save();

    res.status(200).json(productoGuardado);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};

export const actualizarProducto = async (req, res) => {
  try {
    const {id} = req.params;

    const producto = await Producto.findByPk(id);
    if (!producto) {
      return res.status(404).json(["El producto buscado no existe"]);
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

    await producto.update({
      caracteristicas,
      descripcion,
      deporte,
      tipo,
      genero,
      talle,
      precio,
      stock,
    });

    res.status(200).json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};

export const borrarProducto = async (req, res) => {
  try {
    
    const {id} = req.params;

    const producto = await Producto.findByPk(id);
    if (!producto) {
      return res.status(404).json(["El producto buscado no existe"]);
    }

    const productoEliminado = producto;

    await producto.destroy();

    res.status(200).json(productoEliminado);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};
