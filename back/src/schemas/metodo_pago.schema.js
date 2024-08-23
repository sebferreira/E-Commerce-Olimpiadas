import {z} from "zod";

export const metodoPagoSchema = z.object({
  num_tarjeta: z.string({
    required_error: "Numero Tarjeta es requerido",
  }),
  f_vencimiento: z
    .string({
      required_error: "Fecha Vencimiento es requerido",
    })
    .min(5, {
      message: "Fecha Vencimiento debe tener 5 caracteres",
    })
    .max(5, {
      message: "Fecha Vencimiento debe tener 5 caracteres",
    }),

  banco: z.string({
    required_error: "Banco es requerido",
  }),
});
