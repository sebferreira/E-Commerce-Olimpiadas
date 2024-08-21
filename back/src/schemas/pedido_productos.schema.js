import {z} from "zod";

export const metodoPagoSchema = z.object({
  cantidad: z.number({
    required_error: "Cantidad es requerido",
  }),
  id_pedido: z.number({
    required_error: "id_pedido es requerido",
  }),
  id_producto: z.number({
    required_error: "id_producto es requerido",
  }),
});
