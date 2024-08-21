import {z} from "zod";

export const metodoPagoSchema = z.object({
  num_tarjeta: z.number({
    required_error: "Numero Tarjeta es requerido",
  }),

  f_vencimiento: z
    .string({
      required_error: "Fecha Vencimiento es requerido",
    })
    .min(7, {
      message: "Fecha Vencimiento debe tener 7 caracteres",
    })
    .max(7, {
      message: "Fecha Vencimiento debe tener 7 caracteres",
    }),

  marca: z.string({
    required_error: "Marca es requerido",
  }),
});
