import {
  Box,
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
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  color: "black",
};
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {deportes} from "../../scripts/deportes";
import {actualizarProductos} from "../../queryFn";
import {useNavigate} from "react-router-dom";

export default function ActualizarProducto({producto}) {
  const navigate = useNavigate();
  const [gender, setGender] = useState(producto.genero);
  const [type, setType] = useState(producto.tipo);
  const [sport, setSport] = useState(producto.deporte);
  const [descripcion, setDescripcion] = useState(producto.descripcion);
  const [caracteristicas, setCaracteristicas] = useState(
    producto.caracteristicas
  );
  const [talle, setTalle] = useState(producto.talle);
  const [stock, setStock] = useState(Number(producto.stock));
  const [precio, setPrecio] = useState(Number(producto.precio));

  const handleChange = (e, setEstado) => {
    setEstado(e.target.value);
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
    const productoActualizado = await actualizarProductos(
      data,
      producto.id_producto
    );
    if (productoActualizado) {
      setMessage("Se actualizó con exito");
    }

    navigate(0);
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
    <Box
      sx={[
        style,
        {
          width: {xs: "15rem", md: "15rem", lg: "30rem"},
          height: {xs: 500, md: 530, xl: 700},
        },
      ]}>
      <Box
        sx={{
          height: "100%",
          overflowX: "auto",
          scrollbarColor: "#262626 transparent",
          scrollbarWidth: "thin",
          scrollbarGutter: "stable",
        }}>
        <Typography
          variant="h5"
          component="h2"
          textAlign="center"
          fontWeight="bold"
          sx={{
            marginBottom: {xs: 2, md: 3},
            fontSize: {xs: "1.1rem", md: "1.5rem"},
          }}>
          Actualizar Producto
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
            value={descripcion}
            onChange={(e) => {
              handleChange(e, setDescripcion);
            }}
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
            value={caracteristicas}
            onChange={(e) => {
              handleChange(e, setCaracteristicas);
            }}
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
              label="sport"
              {...register("deporte", {required: true})}
              value={sport}
              onChange={(e) => {
                handleChange(e, setSport);
              }}>
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
              label="type"
              {...register("tipo", {required: true})}
              value={type}
              onChange={(e) => {
                handleChange(e, setType);
              }}>
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
              label="Genero"
              {...register("genero", {required: true})}
              value={gender}
              onChange={(e) => {
                handleChange(e, setGender);
              }}>
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
            value={talle}
            onChange={(e) => {
              handleChange(e, setTalle);
            }}
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
            value={precio}
            onChange={(e) => {
              handleChange(e, setPrecio);
            }}
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
            value={stock}
            onChange={(e) => {
              handleChange(e, setStock);
            }}
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
            Actualizar
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
      </Box>
    </Box>
  );
}
