import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useAuth} from "../../context/AuthContext";
import {insertarMetodoPago} from "../../queryFn";

export default function Pagos() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const {user} = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    data.cod_tarjeta = Number(data.cod_tarjeta);
    const pago = await insertarMetodoPago(data, user.id_usuario);
    if (pago) {
      return navigate("/pagos/aprobado");
    }
  });
  return (
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
              marginBottom: {xs: 2, md: 5},
              fontSize: {xs: "1.1rem", md: "1.5rem"},
            }}>
            Datos de su tarjeta
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
              Numero de la tarjeta
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: "1rem",
              }}
              type="number"
              fontWeight="bold"
              {...register("num_tarjeta", {required: true})}
              size="small"
              variant="outlined"
            />
            {errors.num_tarjeta && (
              <Typography
                color="error"
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                }}>
                el Numero de la tarjeta es necesario
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
              Codigo de la tarjeta
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: "1rem",
              }}
              type="number"
              fontWeight="bold"
              {...register("cod_tarjeta", {required: true})}
              size="small"
              variant="outlined"
            />
            {errors.cod_tarjeta && (
              <Typography
                color="error"
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                }}>
                el Codigo de la tarjeta es necesario
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
              Fecha de vencimiento
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: "1rem",
              }}
              type="text"
              fontWeight="bold"
              {...register("f_vencimiento", {required: true})}
              size="small"
              variant="outlined"
            />
            {errors.f_vencimiento && (
              <Typography
                color="error"
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                }}>
                la Fecha de vencimiento es necesaria
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
              Banco
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: "1rem",
              }}
              type="text"
              {...register("banco", {required: true})}
              size="small"
              variant="outlined"
            />
            {errors.banco && (
              <Typography
                color="error"
                fontWeight="bold"
                variant="body2"
                sx={{
                  marginTop: "0.5rem",
                }}>
                el banco es necesario
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
              Pagar
            </Button>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
}
