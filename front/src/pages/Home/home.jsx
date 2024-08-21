import {Box, Container, Typography} from "@mui/material";
import Carrousel from "../../components/Carrousel/carrousel";
import ProductsSection from "../../components/ProductSection/productSection";

export default function Home() {
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
              width: {xs: "100%", md: "100%"},
            }}>
            {/* 
            <Typography
              component="p"
              variant="h3"
              sx={{
                fontWeight: "bold",
                marginBottom: {xs: "1rem", sm: "2rem"},
              }}
              fontSize={{xs: "1.5rem", sm: "3rem", lg: "3rem", xl: "4rem"}}
              color={"#1c1a42"}>
              Compra aquí, compra bien.
            </Typography> */}
            <Carrousel />
          </Box>
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
              Nuestros Productos
            </Typography>
            <ProductsSection />
          </Box>
        </Box>
      </Container>
    </>
  );
}
