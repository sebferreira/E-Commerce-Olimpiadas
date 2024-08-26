import {Box, Container, Typography} from "@mui/material";
import {useAuth} from "../../context/AuthContext";
import CompletadosSectionAdmin from "../../components/ProductSection/completadosSectionAdmin";
import CompletadosSectionUser from "../../components/ProductSection/completadosSectionUser";
/* import {useParams} from "react-router-dom"; */

export default function CarritoPedidosCompletados() {
  /* const params = useParams(); */
  const {user} = useAuth();
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
              {user && user.rol === "admin" && "El carrito de compras global"}
              {user && user.rol !== "admin" && "Tú carrito de compras"}
            </Typography>
            {user && user.rol === "admin" && <CompletadosSectionAdmin />}
            {user && user.rol === "user" && <CompletadosSectionUser />}
          </Box>
        </Box>
      </Container>
    </>
  );
}
