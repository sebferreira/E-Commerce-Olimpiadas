import {Box, Container, Divider, Typography} from "@mui/material";
import {useAuth} from "../../context/AuthContext";

export default function Ayuda() {
  const {user} = useAuth();
  return (
    <>
      <Container
        className="contenedor"
        style={{
          maxWidth: "100%",
          width: "100%",
          padding: "0",
          height: "100%",
        }}>
        <Box
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "2rem",
            color: "black",
          }}>
          <Box
            sx={{
              backgroundColor: "#F5F5F5",
              borderRadius: 2,
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                transition: "box-shadow 0.3s ease-in-out",
                transform: "scale(1.02)",
              },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "black",
              padding: "1rem",
              height: "fit-content",
              width: {xs: "320px", sm: "500px"},
              marginBottom:"2rem",
            }}>
            <Typography
              sx={{
                fontSize: {xs: "1.2rem", md: "1.5rem"},
                marginBottom: "1rem",
                height: "fit-content",
                fontWeight: "bold",
                color: "black",
              }}>
              Preguntas frecuentes
            </Typography>
            {!user && (
              <>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",
                    alignItems: "flex-end",
                    fontWeight: "bold",
                  }}>
                  ¿Cómo registrarme?
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",
                    alignItems: "flex-end",
                  }}>
                  {" "}
                  1)Ve a la parte donde dice registrarse. <br /> 2)Una vez
                  ingresaste a registrarse ingresa los siguientes datos: nombre,
                  apellido, DNI, teléfono, email y contraseña.
                  <br /> 3)Luego selecciona el botón de registrarse para
                  terminar con el procedimiento.
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",
                    alignItems: "flex-end",
                    fontWeight: "bold",
                  }}>
                  ¿Cómo inicio sesión?
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",

                    alignItems: "flex-end",
                  }}>
                  1)Una vez registrado en el inicio de la página presiona el
                  botón iniciar sesión.
                  <br />
                  2)Una vez ingresaste a registrarse ingresa el email y la
                  contraseña. <br />
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",
                    alignItems: "flex-end",
                    fontWeight: "bold",
                  }}>
                  ¿Cómo veo los productos?
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",
                    alignItems: "flex-end",
                  }}>
                  1)En el inicio selecciona unisex, hombres o mujeres. <br />
                  2)Una vez dentro veras los distintos productos de estas
                  categorias.{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",
                    alignItems: "flex-end",
                  }}>
                  1)En el inicio selecciona deportes. <br />
                  2)Podras ver todas las categorias que puedes seleccionar, haz
                  click en alguna y veras los productos de la misma.
                </Typography>
              </>
            )}
            {user && user.rol === "admin" && (
              <>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",
                    alignItems: "flex-end",
                    fontWeight: "bold",
                  }}>
                  ¿Cómo agrego productos?
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",
                    alignItems: "flex-end",
                  }}>
                  {" "}
                  1)Desde el inicio presiona agregar.
                  <br /> 2)Luego llena los campos requeridos.
                  <br /> 3)Presiona agregar.
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",
                    alignItems: "flex-end",
                    fontWeight: "bold",
                  }}>
                  ¿Cómo elimino productos?
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",

                    alignItems: "flex-end",
                  }}>
                  1.1)Desde el inicio haz click en el boton rojo. <br />
                  2.1)Desde el inicio presiona unisex, hombre o mujer. <br />
                  2.2)Luego desde el inicio haz click en el boton rojo.
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",
                    alignItems: "flex-end",
                    fontWeight: "bold",
                  }}>
                  ¿Cómo actualizo un producto?
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",
                    alignItems: "flex-end",
                  }}>
                  1)Desde el inicio selecciona cualquier producto.
                  <br /> 2)Selecciona el atributo a actaliar y modificalo.
                  <br />
                  3)Presiona Actualizar.
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",
                    alignItems: "flex-end",
                    fontWeight: "bold",
                  }}>
                  Carrito de compras.
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",
                    alignItems: "flex-end",
                  }}>
                  <Typography
                    sx={{
                      fontSize: {xs: "0.9rem", md: "1rem"},
                      height: "fit-content",
                      color: "black",
                      width: "100%",
                      alignItems: "flex-end",
                      fontWeight: "bold",
                    }}>
                    ¿Cómo saco pedidos?
                  </Typography>
                  1)En el inicio selecciona el icono de carrito. <br />
                  2)Presiona modificar para modificar la cantidad de productos
                  del carrito.
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",
                    alignItems: "flex-end",
                  }}>
                  <Typography
                    sx={{
                      fontSize: {xs: "0.9rem", md: "1rem"},
                      height: "fit-content",
                      color: "black",
                      width: "100%",
                      alignItems: "flex-end",
                      fontWeight: "bold",
                    }}>
                    ¿Cómo modifico el estado de los productos?
                  </Typography>
                  1)Desde el inicio presiona el carrito <br />
                  2)Presiona algún pedido.
                  <br />
                  3)Selecciona estado.
                  <br /> 4)Elije el estado.
                  <br /> 5)Presiona actualizar estado.
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",
                    alignItems: "flex-end",
                    fontWeight: "bold",
                  }}>
                  ¿Cómo veo el resumen histórico de compras?
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",

                    alignItems: "flex-end",
                  }}>
                  1)Desde el inicio presiona el carrito. <br />
                  2)Presiona ver los comprados.
                  <br /> 3)Presiona algún pedido.
                  <br /> 4)Selecciona estado. <br />
                  5)Elije el estado. <br />
                  6)Presiona actualizar estado.
                </Typography>
              </>
            )}
            {user && user.rol != "admin" && (
              <>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",
                    alignItems: "flex-end",
                    fontWeight: "bold",
                  }}>
                  ¿Cómo agrego al carrito?
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",
                    alignItems: "flex-end",
                  }}>
                  {" "}
                  1.1)Desde el inicio puedes agregar productos al carrito.{" "}
                  <br />
                  1.2)Para hacerlo presiona agregar al carrito.
                  <br /> 2.1)En el inicio selecciona unisex, hombres o mujeres.{" "}
                  <br />
                  2.2)Una vez dentro veras los distintos productos de estas
                  categorias.
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",
                    alignItems: "flex-end",
                    fontWeight: "bold",
                  }}>
                  ¿Cómo veo los productos?
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",

                    alignItems: "flex-end",
                  }}>
                  1)En el inicio selecciona deportes.
                  <br /> 2)Podras ver todas las categorias que puedes
                  seleccionar. <br />
                  3)Haz click en alguna y veras los productos de la misma.
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",
                    alignItems: "flex-end",
                    fontWeight: "bold",
                  }}>
                  Carrito.
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",
                    alignItems: "flex-end",
                  }}>
                  <Typography
                    sx={{
                      fontSize: {xs: "0.9rem", md: "1rem"},
                      height: "fit-content",
                      color: "black",
                      width: "100%",
                      alignItems: "flex-end",
                      fontWeight: "bold",
                    }}>
                    ¿Cómo quito los productos del carrito?
                  </Typography>
                  1)En el inicio selecciona el icono de carrito. <br />
                  2)Presiona sacar para quitar el producto del carrito.
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",
                    alignItems: "flex-end",
                  }}>
                  <Typography
                    sx={{
                      fontSize: {xs: "0.9rem", md: "1rem"},
                      height: "fit-content",
                      color: "black",
                      width: "100%",
                      alignItems: "flex-end",
                      fontWeight: "bold",
                    }}>
                    ¿Cómo modifico la cantidad del producto en el carrito?
                  </Typography>
                  1)En el inicio selecciona el icono de carrito. <br />
                  2)Presiona modificar para modificar la cantidad de productos
                  del carrito.
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",
                    alignItems: "flex-end",
                    fontWeight: "bold",
                  }}>
                ¿Cómo compro un producto?
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "1rem", md: "1.2rem"},
                    marginBottom: "1rem",
                    height: "fit-content",
                    color: "black",
                    width: "100%",

                    alignItems: "flex-end",
                  }}>
                  1)En el inicio selecciona el icono de carrito. <br />
                  2)Presiona comprar productos. <br />
                  3)Ingresa los datos del envio que te solicitan. <br />
                  4)Ingresa los datos de tu tarjeta. <br />
                  5)Presiona pagar.
                  <br /> 6)Luego selecciona volver al carrito o volver al
                  inicio.
                </Typography>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
}
