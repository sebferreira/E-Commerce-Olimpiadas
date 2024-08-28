import {Box, Button, Divider, Grid, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {obtenerTodosPedidosAdmin} from "../../queryFn";
import CardCarrito from "../ProductCard/CardCarrito";
import {useNavigate} from "react-router-dom";

export default function CarritoSectionAdmin() {
  const [pedidos, setPedidos] = useState([]);
  const navigate = useNavigate();
  const ConseguirProductos = async () => {
    const pedido = await obtenerTodosPedidosAdmin();
    setPedidos(pedido);
  };

  useEffect(() => {
    ConseguirProductos();
  }, []);

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "auto",
        scrollbarColor: "#262626 transparent",
        scrollbarWidth: "thin",
        scrollbarGutter: "stable",
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          width: {xs: "200px", sm: "400px"},
          padding: "2rem",
          height: "100%",
        }}>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontSize: {xs: "1.1rem", md: "1.3rem"},
            color: "black",
            textTransform: "none",
          }}>
          Resumen historico de compras
        </Typography>
        <br />
        <Divider />
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: "2rem",
            marginBottom: "1rem",
            width: "100%",
            fontSize: {xs: "1.2rem", md: "1.5rem"},
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: 2,
          }}
          onClick={() => {
            navigate("/productos/carrito/completados");
          }}>
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontSize: {xs: "1rem", md: "1.2rem"},
              fontWeight: "bold",
              color: "white",
              textTransform: "none",
            }}>
            Ver los comprados
          </Typography>
        </Button>
      </Box>
      <Box
        container
        sx={{
          gap: "1.5rem",
          padding: {xs: "1rem", sm: "2rem"},
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
        {pedidos.length > 0 &&
          pedidos.map((pedido) => {
            return (
              <>
                {pedido.Productos.length > 0 && (
                  <Box
                    key={pedido.id_pedido}
                    sx={{
                      backgroundColor: "#FFFF",
                      borderRadius: 2,
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "#E0E0E0",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                        transition: "box-shadow 0.3s ease-in-out",
                        transform: "scale(1.02)",
                      },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: {xs: "space-evenly", sm: "space-between"},
                      color: "black",
                      padding: ".5rem",
                      height: {xs: "300px", sm: "320px"},
                      width: {xs: "200px", sm: "250px"},
                    }}>
                    <CardCarrito
                      producto={pedido.Productos[0]}
                      estado={pedido.estado}
                      idUser={pedido.id_usuario}
                      idPedido={pedido.id_pedido}
                    />
                  </Box>
                )}
              </>
            );
          })}
        {pedidos.message_error && (
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              marginTop: "2rem",
              color: "red",
              fontWeight: "bold",
              fontSize: {xs: "1.2rem", md: "1.5rem"},
              marginBottom: "2rem",
              padding: "1rem",
            }}>
            No hay productos en el carrito aún.
            <br /> espera a que agreguen uno.
          </Typography>
        )}
      </Box>
    </Grid>
  );
}
