import {z} from "zod";

export const productosSchema = z.object({
  caracteristicas: z
    .min(10, {
      message: "Caracteristicas debe tener al menos 10 caracteres",
    })
    .max(255, {
      message: "Caracteristicas no puede exceder los 255 caracteres",
    }),

  descripcion: z
    .string({
      required_error: "Descripcion es requerido",
    })
    .min(5, {
      message: "Descripcion debe tener al menos 5 caracteres",
    })
    .max(50, {
      message: "Descripcion no puede exceder los 50 caracteres",
    }),

  deporte: z
    .string({
      required_error: "Deporte es requerido",
    })
    .min(3, {
      message: "Deporte debe tener al menos 3 caracteres",
    })
    .max(30, {
      message: "Deporte no puede exceder los 30 caracteres",
    }),

  tipo: z
    .string({
      required_error: "Tipo es requerido",
    })
    .min(5, {
      message: "Tipo debe tener al menos 5 caracteres",
    })
    .max(30, {
      message: "Tipo no puede exceder los 30 caracteres",
    }),

  genero: z
    .string({
      required_error: "Genero es requerido",
    })
    .min(5, {
      message: "Genero debe tener al menos 5 caracteres",
    })
    .max(10, {
      message: "Genero no puede exceder los 10 caracteres",
    }),

  talle: z
    .string({
      required_error: "Talle es requerido",
    })
    .min(1, {
      message: "Talle debe tener al menos 1 caracter",
    }),

  precio: z.number({
    required_error: "Precio es requerido",
    invalid_type_error: "Precio debe ser un numero",
  }),

  stock: z.number({
    required_error: "Stock es requerido",
    invalid_type_error: "Stock debe ser un numero",
  }),
});
