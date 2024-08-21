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

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const {signup, isAuthRegistered, registerErrors} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthRegistered) navigate("/login");
  }, [isAuthRegistered, navigate]);

  const onSubmit = handleSubmit(async (data) => {
    signup(data);
  });

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
          width: {xs: "15rem", md: "15rem", lg: "25rem"},
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
            Registrarse
          </Typography>
          <form onSubmit={onSubmit}>
            {registerErrors.map((error, i) => {
              return (
                <Typography
                  color="error"
                  variant="body2"
                  fontWeight="bold"
                  sx={{
                    marginTop: "0.5rem",
                  }}
                  key={i}>
                  {error}
                </Typography>
              );
            })}
            <Typography
              variant="h6"
              component="label"
              textAlign="center"
              sx={{
                margin: 0,
                fontSize: {xs: "1rem", md: "1.2rem"},
              }}>
              Nombre
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}
              type="text"
              {...register("nombre", {required: true})}
              size="small"
              variant="outlined"
            />
            {errors.nombre && (
              <Typography
                color="error"
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                }}>
                Nombre es necesario
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
              Apellido
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}
              type="text"
              {...register("apellido", {required: true})}
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
                Apellido es necesario
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
              DNI
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}
              type="number"
              {...register("dni", {required: true})}
              size="small"
              variant="outlined"
            />
            {errors.dni && (
              <Typography
                color="error"
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                }}>
                el dni es necesario
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
              Telefono
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}
              type="tel"
              {...register("telefono", {required: true})}
              size="small"
              variant="outlined"
            />
            {errors.telefono && (
              <Typography
                color="error"
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                }}>
                Telefono es necesario
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
              Email
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}
              type="email"
              {...register("email", {required: true})}
              size="small"
              variant="outlined"
            />
            {errors.email && (
              <Typography
                color="error"
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                }}>
                Email es necesario
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
              Contraseña
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}
              type="password"
              {...register("password", {required: true})}
              size="small"
              variant="outlined"
            />
            {errors.password && (
              <Typography
                color="error"
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                }}>
                Contraseña es necesario
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
              Confirmar contraseña
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}
              type="password"
              {...register("confirmar", {required: true})}
              size="small"
              variant="outlined"
            />
            {errors.confirmar && (
              <Typography
                color="error"
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                }}>
                Confirmar Contraseña es necesario
              </Typography>
            )}

            <Button
              variant="contained"
              size="medium"
              style={{
                marginTop: "1rem",
                width: "100%",
                backgroundColor: "#172b4d",
                borderRadius: 12,
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "none",
              }}
              type="submit">
              Registrarse
            </Button>
          </form>
          <Typography
            variant="body2"
            component="p"
            textAlign="center"
            fontWeight="bold"
            sx={{
              marginTop: "1rem",
              color: "black",
            }}>
            <Link to="/login" style={{color: "black", textDecoration: "none"}}>
              ¿Ya tienes una cuenta? <br />
              Iniciar Sesion.
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
