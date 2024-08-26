import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Dinero from "@mui/icons-material/AttachMoney";
import ProductoNombre from "@mui/icons-material/ListAlt";
import Deporte from "@mui/icons-material/SportsBaseball";
import Detalles from "@mui/icons-material/Info";
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
import {actualizarEstadoPedido} from "../../queryFn";
import {useNavigate} from "react-router-dom";

export default function ActualizarProductoCarrito({
  producto,
  estado,
  idUser,
  idPedido,
}) {
  const navigate = useNavigate();
  const [estadoActual, setEstadoActual] = useState(estado);

  const handleChange = (e, setEstado) => {
    setEstado(e.target.value);
  };
  const [message, setMessage] = useState("");
  const {register, handleSubmit} = useForm();

  const onSubmit = handleSubmit(async (data) => {
   
    if (data.estado === "Pendiente_de_entrega") {
      data.estado = "Pendiente de entrega";
    }
    const productoActualizado = await actualizarEstadoPedido(data, idPedido);
  
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
          width: {xs: 250, lg: 400},
          height: {xs: 530, xl: 700},
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
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
          Actualizar Estado
        </Typography>
        <Box>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}>
            <ProductoNombre />
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                marginLeft: "1rem",
              }}>
              Producto
            </Typography>
          </div>
          <Typography
            id="modal-modal-title"
            sx={{
              fontSize: "20px",
              textOverflow: "ellipsis",
              whiteSpace: "initial",
              overflow: "hidden",
            }}>
            {producto.descripcion}
          </Typography>
          <div
            style={{
              display: "flex",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}>
            <Dinero />
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                textAlign: "left",
                marginLeft: "1rem",
              }}>
              Precio unitario
            </Typography>
          </div>
          <Typography
            id="modal-modal-title"
            sx={{
              fontSize: " 18px",
            }}>
            ${producto.precio}
          </Typography>
          <div
            style={{
              display: "flex",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}>
            <Deporte />
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                textAlign: "left",
                marginLeft: "1rem",
              }}>
              Deporte
            </Typography>
          </div>
          <Typography
            id="modal-modal-title"
            sx={{
              fontSize: " 18px",
            }}>
            {producto.deporte}
          </Typography>
          <div
            style={{
              display: "flex",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}>
            <Detalles />
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                textAlign: "left",
                marginLeft: "1rem",
              }}>
              Detalles
            </Typography>
          </div>
          <Typography
            id="modal-modal-title"
            sx={{
              width: "100%",
              whiteSpace: "initial",
              fontSize: " 16px",
              marginTop: "1rem",
              height: "auto",
              wordWrap: "break-word",
            }}>
            {producto.caracteristicas}
            <br />
            Talle:{producto.talle} <br />
            Genero: {producto.genero}
            <br />
            id del usuario: {idUser}
            <br />
          </Typography>
          <div
            style={{
              display: "flex",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}>
            <Detalles />
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                textAlign: "left",
                marginLeft: "1rem",
              }}>
              Estado
            </Typography>
          </div>
          <form onSubmit={onSubmit}>
            <FormControl
              fullWidth
              sx={{
                marginBottom: {xs: "0.5rem", md: "1rem"},
              }}
              size="small">
              <InputLabel id="demo-simple-select-label">Estado</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="estado"
                {...register("estado", {required: true})}
                value={
                  estadoActual === "Pendiente de entrega"
                    ? "Pendiente_de_entrega"
                    : estadoActual
                }
                onChange={(e) => {
                  handleChange(e, setEstadoActual);
                }}>
                <MenuItem value="Pendiente">Pendiente</MenuItem>
                <MenuItem value="Pendiente_de_entrega">
                  Pendiente de entrega
                </MenuItem>
                <MenuItem value="Completado">Completado</MenuItem>
              </Select>
            </FormControl>
            {message && (
              <Typography
                variant="body2"
                fontWeight="bold"
                sx={{
                  marginTop: "0.5rem",
                  color: "green",
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
              Actualizar Estado
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
