import {z} from "zod";

export const registerSchema = z.object({
  nombre: z
    .string({
      required_error: "Nombre es requerido",
    })
    .min(2, {
      message: "Nombre debe tener al menos los 2 caracteres",
    })
    .max(20, {
      message: "Nombre no puede exceder los 20 caracteres",
    }),
  apellido: z
    .string({
      required_error: "Apellido es requerido",
    })
    .min(2, {
      message: "Apellido debe tener al menos los 2 caracteres",
    })
    .max(20, {
      message: "Apellido no puede exceder los 20 caracteres",
    }),
  telefono: z
    .string({
      required_error: "numero es requerido",
    })
    .min(10, {
      message: "numero debe tener al menos los 10 caracteres",
    })
    .max(10, {
      message: "numero no puede exceder los 10 caracteres",
    }),
  email: z
    .string({
      required_error: "Email es requerido",
    })
    .email({
      required_error: "Email is not valid",
    }),
  password: z
    .string({
      required_error: "Passwordes requeridod",
    })
    .min(8, {
      message: "Password debe tener al menos 8 caracteres",
    })
    .max(50, {
      message: "Password no puede exceder los 50 caracteres",
    }),
});
export const loginSchema = z.object({
  email: z.string({
    required_error: "email es requerido",
  }),
  password: z.string({
    required_error: "Password es requerido",
  }),
});
