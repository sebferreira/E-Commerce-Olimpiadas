import {Box, Container, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import CarritoSection from "../../components/ProductSection/carritoSection";

export default function Carrito() {
  const params = useParams();
  return (
    <>
      <Container
        className="contenedor"
        style={{
          maxWidth: "100%",
          width: "100%",
          padding: "0",
        }}>
        <Box
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "2rem",
              color: "#232323",
            }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: {xs: "1.2rem", md: "1.5rem"},
                marginBottom: "1rem",
                height: "fit-content",
              }}>
              Tú carrito de compras
            </Typography>
            <CarritoSection />
          </Box>
        </Box>
      </Container>
    </>
  );
}
