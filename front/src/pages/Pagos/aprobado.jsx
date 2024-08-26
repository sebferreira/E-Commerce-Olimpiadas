import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {actualizarByMetodoPago, datosUser} from "../../queryFn";

export default function PagosAprobados() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const datosDelUsuario = async () => {
      const usuario = await datosUser();
      setUser(usuario);
    };
    datosDelUsuario();
  }, []);

  useEffect(() => {
    if (user) {
      const actualizar = async () => {
        await actualizarByMetodoPago(user.id_usuario);
      };
      actualizar();
    }
  }, []);
  const viveEnDepartamento = () => {
    if (user.dpto && user.piso) {
      return (
        <Typography
          variant="h5"
          component="h2"
          textAlign="center"
          fontWeight="bold"
          sx={{
            fontSize: {xs: "1.1rem", md: "1.5rem"},
          }}>
          departamento:{user.dpto}
          <br />
          piso: {user.piso}
        </Typography>
      );
    } else {
      return;
    }
  };

  return (
    <>
      {user && (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          spacing={1}>
          <Card
            sx={{
              mt: {xs: "3rem", md: "5rem", xl: "10rem"},
              width: {xs: "15rem", md: "15rem", lg: "25rem"},
              backgroundColor: "#FFFFFF",
              borderRadius: 12,
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
            }}
            style={{
              padding: "1.7rem",
              backgroundColor: "#ffffff",
              borderRadius: 12,
            }}>
            <CardContent>
              <Typography
                variant="h5"
                component="h2"
                textAlign="center"
                fontWeight="bold"
                sx={{
                  fontSize: {xs: "1.1rem", md: "1.5rem"},
                }}>
                Pago Aprobado
              </Typography>
              <Divider />

              <Box>
                <Typography
                  variant="h5"
                  component="h2"
                  fontWeight="bold"
                  sx={{
                    fontSize: {xs: "1.1rem", md: "1.5rem"},
                    marginBottom: "1rem",
                    marginTop: "1rem",
                  }}>
                  Se enviará a:
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  fontWeight="bold"
                  sx={{
                    marginBottom: {xs: 2, md: 5},
                    fontSize: {xs: "1.1rem", md: "1.5rem"},
                  }}>
                  Calle:{user.direccion_calle}
                  <br />
                  Número: {user.direccion_numero}
                  <br />
                  {user.direccion_ciudad}, {user.direccion_provincia}
                  <br />
                  Codigo postal: {user.direccion_codigo_postal}
                  <br />
                  {viveEnDepartamento}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                }}>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    marginTop: "1rem",
                    width: "50%",
                    height: "40px",
                    fontSize: {xs: "11px", lg: "16px"},
                    fontWeight: "bold",
                    textTransform: "none",
                  }}
                  onClick={() => {
                    navigate("/productos/carrito");
                  }}>
                  Volver al carrito
                </Button>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    marginTop: "1rem",
                    width: "50%",
                    height: "40px",
                    fontSize: {xs: "11px", lg: "16px"},
                    fontWeight: "bold",
                    textTransform: "none",
                  }}
                  onClick={() => {
                    navigate("/");
                  }}>
                  Volver al inicio
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      )}
    </>
  );
}
