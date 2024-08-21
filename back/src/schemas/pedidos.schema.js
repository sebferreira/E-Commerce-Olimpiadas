import {z} from "zod";

export const pedidosSchema = z.object({
  estado: z.string({
    required_error: "Estado es requerido",
  }),
});
