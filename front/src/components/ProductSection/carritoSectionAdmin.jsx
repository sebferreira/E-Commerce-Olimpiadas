import {Box, Grid, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {obtenerTodosPedidosAdmin} from "../../queryFn";
import CardCarrito from "../ProductCard/CardCarrito";
/* import {useAuth} from "../../context/AuthContext"; */

export default function CarritoSectionAdmin() {
  const [pedidos, setPedidos] = useState([]);
  const [total, setTotal] = useState(0);
  /* const {user} = useAuth(); */
  const ConseguirProductos = async () => {
    const pedido = await obtenerTodosPedidosAdmin();
    setPedidos(pedido);
    let suma = 0;
    pedido.map((pedido) => {
      console.log(pedido);
      if (pedido.estado === "Completado") {
        suma =
          suma +
          Number(pedido.Productos[0].precio) *
            Number(pedido.Productos[0].Pedidos_Productos.cantidad);
      }
    });
    setTotal(suma);
  };
  pedidos.map((pedido) => {
    console.log(pedido);
  });

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
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          fontSize: {xs: "1.2rem", md: "1.5rem"},
        }}>
        Total Historico de Vendidos: ${total}
      </Typography>
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
      </Box>
    </Grid>
  );
}
