import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useAuth} from "../../context/AuthContext";
import {useEffect} from "react";

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const {signin, loginErrors, isAuthenticated} = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    signin(data);
  });
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
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
            Iniciar Sesion
          </Typography>
          <form onSubmit={onSubmit}>
            {loginErrors.map((error, i) => {
              return (
                <Typography
                  color="error"
                  variant="body2"
                  sx={{
                    marginTop: "0.5rem",
                  }}
                  fontWeight="bold"
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
              Email
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: "1rem",
              }}
              type="email"
              fontWeight="bold"
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
                el Email es necesario
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
              Password
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: "1rem",
              }}
              type="password"
              {...register("password", {required: true})}
              size="small"
              variant="outlined"
            />
            {errors.password && (
              <Typography
                color="error"
                fontWeight="bold"
                variant="body2"
                sx={{
                  marginTop: "0.5rem",
                }}>
                la contraseña es necesaria
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
              Iniciar Sesion
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
            <Link
              to="/register"
              style={{color: "black", textDecoration: "none"}}>
              ¿No tienes una cuenta?
              <br /> Registrate.
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
