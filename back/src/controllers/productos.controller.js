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
    const {productoId} = req.params;
    const producto = await Producto.findByPk(productoId);

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
        .json(["No se encontraron productos para el deporte especificado"]);
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
      return res.status(404).json(["No se encontraron productos"]);
    }

    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};
