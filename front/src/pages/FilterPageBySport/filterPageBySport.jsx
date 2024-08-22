import {Box, Container, Typography} from "@mui/material";
import ProductsSection from "../../components/ProductSection/productSection";
import {useParams} from "react-router-dom";

export default function FilterPageBySport() {
  const params = useParams();
  console.log(params.deporte);
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
              Nuestros Productos de {params.deporte}
            </Typography>
            <ProductsSection />
          </Box>
        </Box>
      </Container>
    </>
  );
}
