import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {insertarDireccion} from "../../queryFn";

export default function Direccion() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [alreadySaved, setAlreadySaved] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    data.direccion_numero = Number(data.direccion_numero);
    if (data.direccion_piso) {
      data.direccion_piso = Number(data.direccion_piso);
    } else {
      data.direccion_piso = null;
    }
    if (data.direccion_dpto) {
      data.direccion_dpto = Number(data.direccion_dpto);
    } else {
      data.direccion_dpto = null;
    }
    const newUser = await insertarDireccion(data);
    if (newUser) {
      setMessage("la direccion se registró correctamente");
      setAlreadySaved(true);
    }
  });
  useEffect(() => {
    if (alreadySaved) navigate("/pagos");
  }, [alreadySaved, navigate]);

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
            Dirección de envío (obligatorio)
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
              Calle (obligatorio)
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
              Numero de casa (obligatorio)
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
            {errors.direccion_numero && (
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
              Ciudad (obligatorio)
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
              Provincia (obligatorio)
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
            {message && (
              <Typography
                variant="body2"
                fontWeight="bold"
                sx={{
                  color: "green",
                  marginTop: "0.5rem",
                }}>
                {message}
              </Typography>
            )}

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
