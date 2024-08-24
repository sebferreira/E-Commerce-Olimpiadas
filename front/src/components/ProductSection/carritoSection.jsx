import {Box, Button, Grid, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {pedidosDelUsuario} from "../../queryFn";
import {useAuth} from "../../context/AuthContext";
import CardCarrito from "../ProductCard/CardCarrito";
import {useNavigate} from "react-router-dom";

export default function CarritoSection() {
  const [pedidos, setPedidos] = useState([]);
  const [total, setTotal] = useState(0);
  const {user} = useAuth();
  const navigate = useNavigate();
  const ConseguirProductos = async () => {
    if (user) {
      const pedido = await pedidosDelUsuario(user.id_usuario);
      setPedidos(pedido);
      let suma = 0;
      pedido.map((pedido) => {
        console.log(pedido);
        if (pedido.estado === "Pendiente") {
          suma =
            suma +
            Number(pedido.Productos[0].precio) *
              Number(pedido.Productos[0].Pedidos_Productos.cantidad);
        }
      });
      setTotal(suma);
    }
  };

  useEffect(() => {
    ConseguirProductos();
  }, [user]);

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
      <Grid
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
            No hay productos en tu carrito aún.
            <br /> agrega uno e intenta más tarde.
          </Typography>
        )}
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            marginTop: "2rem",
            fontSize: {xs: "1.2rem", md: "1.5rem"},
            height: "fit-content",
          }}>
          Total a pagar: ${total}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: "2rem",
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
          }}
          onClick={() => {
            navigate("/direccion");
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
      </Box>
    </Box>
  );
}
