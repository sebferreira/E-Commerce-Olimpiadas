import {Box, Grid, Typography} from "@mui/material";
import Card from "../ProductCard/Card";
import {useParams} from "react-router-dom";
import {getAllProductsBySport} from "../../queryFn";
import {useEffect, useState} from "react";

export default function SportsSection() {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const ConseguirProductos = async () => {
    if (params.deporte) {
      const productos = await getAllProductsBySport(params.deporte);

      setProduct(productos);
    }
  };

  useEffect(() => {
    ConseguirProductos();
  }, [params.deporte]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
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
        {product.length > 0 &&
          product.map((producto) => {
            return (
              <Box
                /*
                item
                xs={5}
                sm={6}
                md={4}
                lg={3}
                xl={2.5} */
                key={producto.id_producto}
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
                <Card producto={producto} />
              </Box>
            );
          })}
        {product.message_error && (
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
            No hay productos disponibles en este sección aún.
            <br /> Por favor, intente más tarde.
          </Typography>
        )}
      </Grid>
    </Box>
  );
}
