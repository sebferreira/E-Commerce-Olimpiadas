import {Box, Button, Grid, Typography} from "@mui/material";
import Card from "../ProductCard/Card";
import {useEffect, useState} from "react";
import {obtenerTodosPedidosAdmin} from "../../queryFn";
import {useAuth} from "../../context/AuthContext";
import CardCarrito from "../ProductCard/CardCarrito";

export default function CarritoSectionAdmin() {
  const [pedidos, setPedidos] = useState([]);
  const {user} = useAuth();
  const ConseguirProductos = async () => {
    const pedido = await obtenerTodosPedidosAdmin();
    console.log(pedidos);
    setPedidos(pedido);
  };

  useEffect(() => {
    ConseguirProductos();
  }, []);

  return (
    <Box
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
      {/* <Grid
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
              <Box
                key={pedido.Productos[0].id_producto}
                sx={{
                  backgroundColor: "#F5F5F5",
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
                  height: {xs: "250px", sm: "320px"},
                  width: {xs: "200px", sm: "250px"},
                }}>
                <CardCarrito
                  producto={pedido.Productos[0]}
                  estado={pedido.estado}
                  idUser={pedido.id_usuario}
                  idPedido={pedido.id_pedido}
                />
              </Box>
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
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            marginTop: "2rem",
            fontSize: {xs: "1.2rem", md: "1.5rem"},
          }}>
          Total:
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: "2rem",
            marginLeft: "1rem",
            marginBottom: "1rem",
            width: "150px",
            fontSize: {xs: "1.2rem", md: "1.5rem"},
            fontWeight: "bold",
            textTransform: "none",
            backgroundColor: "#212121",
            borderRadius: 2,

            "&:hover": {
              backgroundColor: "#303030",
              transform: "scale(1.02)",
            },
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
            Comprar Productos
          </Typography>
        </Button>
      </Box> */}
    </Box>
  );
}
