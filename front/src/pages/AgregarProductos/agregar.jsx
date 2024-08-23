import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useAuth} from "../../context/AuthContext";
import {deportes} from "../../scripts/deportes";
import {crearProductos} from "../../queryFn";

export default function Agregar() {
  const [gender, setGender] = useState("");
  const handleChangeGenero = (event) => {
    setGender(event.target.value);
  };
  const [type, setType] = useState("");
  const handleChangeTipo = (event) => {
    setType(event.target.value);
  };
  const [sport, setSport] = useState("");
  const handleChangeDeporte = (event) => {
    setSport(event.target.value);
  };
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    data.stock = Number(data.stock);
    data.precio = Number(data.precio);
    console.log(data);
    const producto = await crearProductos(data);
    if (producto) {
      setMessage("Se agregó con exito");
    }
  });
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

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
            Ingresar Productos
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
              Descripcion
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}
              type="text"
              {...register("descripcion", {required: true})}
              size="small"
              variant="outlined"
            />
            {errors.descripcion && (
              <Typography
                color="error"
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                }}>
                la descripcion es necesaria
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
              Detalles
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}
              type="text"
              {...register("caracteristicas", {required: true})}
              size="small"
              variant="outlined"
            />
            {errors.caracteristicas && (
              <Typography
                color="error"
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                }}>
                los detalles son necesarios
              </Typography>
            )}
            <FormControl
              size="small"
              fullWidth
              sx={{
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}>
              <InputLabel id="demo-simple-select-label">Deporte</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sport}
                label="sport"
                {...register("deporte", {required: true})}
                onChange={handleChangeDeporte}>
                {deportes.map((deporte) => (
                  <MenuItem value={deporte.name} key={deporte.name}>
                    {deporte.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {errors.deporte && (
              <Typography
                color="error"
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                }}>
                el deporte es necesario
              </Typography>
            )}

            <FormControl
              fullWidth
              size="small"
              sx={{
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}>
              <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="type"
                {...register("tipo", {required: true})}
                onChange={handleChangeTipo}>
                <MenuItem value="Accesorio">Accesorio</MenuItem>
                <MenuItem value="Indumentaria">Indumentaria</MenuItem>
                <MenuItem value="Calzado">Calzado</MenuItem>
              </Select>
            </FormControl>
            {errors.tipo && (
              <Typography
                color="error"
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                }}>
                el tipo es necesario
              </Typography>
            )}
            <FormControl
              fullWidth
              sx={{
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}
              size="small">
              <InputLabel id="demo-simple-select-label">Genero</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Genero"
                {...register("genero", {required: true})}
                onChange={handleChangeGenero}>
                <MenuItem value="Hombre">Hombre</MenuItem>
                <MenuItem value="Mujer">Mujer</MenuItem>
                <MenuItem value="Unisex">Unisex</MenuItem>
              </Select>
            </FormControl>
            {errors.genero && (
              <Typography
                color="error"
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                }}>
                el Genero es necesario
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
              Talle
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}
              type="text"
              {...register("talle", {required: true})}
              size="small"
              variant="outlined"
            />
            {errors.talle && (
              <Typography
                color="error"
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                }}>
                el talle es necesario
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
              Precio
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}
              type="number"
              {...register("precio", {required: true})}
              size="small"
              variant="outlined"
            />
            {errors.precio && (
              <Typography
                color="error"
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                }}>
                el precio es necesario
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
              Stock
            </Typography>
            <TextField
              fullWidth
              sx={{
                display: "block",
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}
              type="number"
              {...register("stock", {required: true})}
              size="small"
              variant="outlined"
            />
            {errors.stock && (
              <Typography
                color="error"
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                }}>
                el stock es necesario
              </Typography>
            )}
            {message && (
              <Typography
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                  color: "rgb(46, 125, 50)",
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
              Agregar
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
            }}></Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
