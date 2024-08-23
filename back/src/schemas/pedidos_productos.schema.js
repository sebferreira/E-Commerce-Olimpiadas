import {z} from "zod";

export const pedidosProductosSchema = z.object({
  cantidad: z.number({
    required_error: "Cantidad es requerido",
  }),
  id_producto: z.number({
    required_error: "id_producto es requerido",
  }),
});
