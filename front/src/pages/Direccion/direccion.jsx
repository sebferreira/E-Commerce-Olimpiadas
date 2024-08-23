import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import {useEffect} from "react";
import {useNavigate, Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useAuth} from "../../context/AuthContext";

export default function Direccion() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const {user} = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    /* signup(data); */
  });
  /*  useEffect(() => {
    if (isAuthRegistered) navigate("/login");
  }, [isAuthRegistered, navigate]);

 */
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      spacing={2}>
      <Card
        sx={{
          mt: "3rem",
          ml: "1rem",
          width: {xs: "20rem", md: "15rem", lg: "30rem"},
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
        }}
        style={{
          padding: "1rem",
          marginBottom: "2rem",
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
              marginBottom: {xs: 2, md: 3},
              fontSize: {xs: "1.1rem", md: "1.5rem"},
            }}>
            Dirección de envío
          </Typography>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h6"
              component="label"
              textAlign="center"
              sx={{
                margin: 0,
                fontSize: {xs: "1rem", md: "1.2rem"},
              }}>
              direccion_calle
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}
              type="text"
              {...register("direccion_calle", {required: true})}
              size="small"
              variant="outlined"
            />
            {errors.direccion_calle && (
              <Typography
                color="error"
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                }}>
                la calle es necesaria
              </Typography>
            )}
            <Typography
              variant="h6"
              component="label"
              textAlign="center"
              sx={{
                margin: 0,
                fontSize: {xs: "1rem", md: "1.2rem"},
              }}>
              Numero de casa
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}
              type="number"
              {...register("direccion_numero", {required: true})}
              size="small"
              variant="outlined"
            />
            {errors.apellido && (
              <Typography
                color="error"
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                }}>
                el numero de casa es necesario
              </Typography>
            )}
            <Typography
              variant="h6"
              component="label"
              textAlign="center"
              sx={{
                margin: 0,
                fontSize: {xs: "1rem", md: "1.2rem"},
              }}>
              Ciudad(obligatorio)
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}
              type="text"
              {...register("direccion_ciudad", {required: true})}
              size="small"
              variant="outlined"
            />
            {errors.direccion_ciudad && (
              <Typography
                color="error"
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                }}>
                la ciudad es necesaria
              </Typography>
            )}

            <Typography
              variant="h6"
              component="label"
              textAlign="center"
              sx={{
                margin: 0,
                fontSize: {xs: "1rem", md: "1.2rem"},
              }}>
              Provincia(obligatorio)
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}
              type="text"
              {...register("direccion_provincia", {required: true})}
              size="small"
              variant="outlined"
            />
            {errors.direccion_provincia && (
              <Typography
                color="error"
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                }}>
                la provincia es necesaria
              </Typography>
            )}
            <Typography
              variant="h6"
              component="label"
              textAlign="center"
              sx={{
                margin: 0,
                fontSize: {xs: "1rem", md: "1.2rem"},
              }}>
              Codigo postal (obligatorio)
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}
              type="text"
              {...register("direccion_codigo_postal", {required: true})}
              size="small"
              variant="outlined"
            />
            {errors.direccion_codigo_postal && (
              <Typography
                color="error"
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                }}>
                el codigo postal es necesario
              </Typography>
            )}
            <Typography
              variant="h6"
              component="label"
              textAlign="center"
              sx={{
                margin: 0,
                fontSize: {xs: "1rem", md: "1.2rem"},
              }}>
              Piso (opcional)
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}
              type="number"
              {...register("direccion_piso")}
              size="small"
              variant="outlined"
            />
            <Typography
              variant="h6"
              component="label"
              textAlign="center"
              sx={{
                margin: 0,
                fontSize: {xs: "1rem", md: "1.2rem"},
              }}>
              Numero de departamento (opcional)
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}
              type="text"
              {...register("direccion_dpto")}
              size="small"
              variant="outlined"
            />

            <Button
              variant="contained"
              size="medium"
              style={{
                marginTop: "1rem",
                width: "100%",
                backgroundColor: "#000",
                borderRadius: 12,
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "none",
              }}
              type="submit">
              Ingresar Direccion
            </Button>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
}
