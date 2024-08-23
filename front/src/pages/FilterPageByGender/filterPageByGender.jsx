import {Box, Container, Typography} from "@mui/material";
import ProductsSection from "../../components/ProductSection/productSection";
import {useParams} from "react-router-dom";
import GenderSection from "../../components/ProductSection/genderSection";

export default function FilterPageByGender() {
  const params=useParams()
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
              Nuestros Productos para {params.genero}
            </Typography>
            <GenderSection />
          </Box>
        </Box>
      </Container>
    </>
  );
}
