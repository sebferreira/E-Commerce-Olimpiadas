import Pedido from "../models/pedidos.model.js";

export const profileUser = (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(401).json(["Unauthorized"]);
  }
  res.json(user);
};
