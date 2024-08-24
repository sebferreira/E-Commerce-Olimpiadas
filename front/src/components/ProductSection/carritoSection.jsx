import {Box, Button, Divider, Grid, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {pedidosDelUsuario} from "../../queryFn";
import {useAuth} from "../../context/AuthContext";
import CardCarrito from "../ProductCard/CardCarrito";
import {useNavigate} from "react-router-dom";

export default function CarritoSection() {
  const [pedidos, setPedidos] = useState([]);
  const [total, setTotal] = useState(0);
  const [productosComprar, setProductosComprar] = useState(0);

  const {user} = useAuth();
  const navigate = useNavigate();
  const ConseguirProductos = async () => {
    if (user) {
      const pedido = await pedidosDelUsuario(user.id_usuario);
      setPedidos(pedido);
      let suma = 0;
      let contenedor = 0;
      pedido.map((pedido) => {
        console.log(pedido);
        if (pedido.estado === "Pendiente") {
          contenedor++;
          suma =
            suma +
            Number(pedido.Productos[0].precio) *
              Number(pedido.Productos[0].Pedidos_Productos.cantidad);
        }
      });
      setTotal(suma);
      setProductosComprar(contenedor);
    }
  };

  useEffect(() => {
    ConseguirProductos();
  }, [user]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {xs: "column", md: "row"},
        justifyContent: "center",
        alignItems: {xs: "center", md: "normal"},
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
          flexDirection: "column" /* 
          alignItems: "center", */,
          marginTop: "2rem",
          marginBottom: "2rem",
          marginRight: {xs: 0, md: "2rem"},
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          width: {xs: "200px", sm: "400px"},
          padding: "2rem",
          cursor: "pointer",
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
          Resumen de compra
        </Typography>
        <br />
        <Divider />
        <Typography
          variant="h5"
          sx={{
            marginTop: "2rem",
            fontSize: {xs: "1rem", md: "1.2rem"},
            height: "fit-content",
          }}>
          Productos pendientes a pagar: {productosComprar}
          <br />
          Total a pagar: ${total}
        </Typography>
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
            /* backgroundColor: "#212121",

            "&:hover": {
              backgroundColor: "#303030",
              transform: "scale(1.02)",
            }, */
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
