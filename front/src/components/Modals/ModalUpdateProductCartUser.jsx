import {Typography, Box, Button, TextField} from "@mui/material";
import Dinero from "@mui/icons-material/AttachMoney";
import ProductoNombre from "@mui/icons-material/ListAlt";
import Detalles from "@mui/icons-material/Info";
import {useAuth} from "../../context/AuthContext";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

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

export default function ModalProductUpdateCartUser({
  producto,
  estado,
  idUser,
  cantidad,
}) {
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const [quantity, setQuantity] = useState(Number(cantidad));

  const handleChange = (e, setEstado) => {
    setEstado(e.target.value);
  };
  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm();
  const {user} = useAuth();
  const onSubmit = handleSubmit(async (data) => {
    data.cantidad = Number(data.cantidad);
    if (data.cantidad > producto.stock || data.cantidad <= 0) {
      return setErrorMessage("Ingresa una cantidad acorde al stock");
    }
    /* data.id_producto = producto.id_producto;
    const pedido = await insertarPedido(data, user.id_usuario); */
    if (pedido) {
      setMessage("cantidad cambiada con éxito");
    }
  });
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
    if (message) {
      const timer2 = setTimeout(() => {
        setMessage("");
      }, 3000);
      return () => clearTimeout(timer2);
    }
  }, [errorMessage, message]);
  return (
    <Box
      sx={[
        style,
        {
          width: {xs: 250, sm: 300, lg: 400},
          height: {xs: 550, sm: 600, xl: 700},
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflowX: "auto",
          scrollbarColor: "#262626 transparent",
          scrollbarWidth: "thin",
          scrollbarGutter: "stable",
        },
      ]}>
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
            overflowX: "auto",
            scrollbarColor: "#262626 transparent",
            scrollbarWidth: "thin",
            scrollbarGutter: "stable",
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
          id del usuario: {idUser}
          <br />
          Talle:{producto.talle} <br />
          Tipo: {producto.tipo} <br />
          Genero: {producto.genero}
          <br />
          Stock del producto: {producto.stock}
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
        <Typography id="modal-modal-title">{estado}</Typography>
      </Box>
      <form
        style={{
          marginTop: "1rem",
          display: "flex",
          gap: "1rem",
          width: "100%",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
        onSubmit={onSubmit}>
        {!errors.cantidad && errorMessage && (
          <Typography
            color="error"
            variant="body2"
            fontWeight="bold"
            sx={{
              marginTop: "0.5rem",
            }}>
            {errorMessage}
          </Typography>
        )}
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
        {errors.cantidad && (
          <Typography
            color="error"
            variant="body2"
            fontWeight="bold"
            sx={{
              marginTop: "0.5rem",
            }}>
            ingrese una cantidad
          </Typography>
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1rem",
            width: "100%",
          }}>
          <TextField
            id="standard-basic"
            label="Cantidad pedida"
            size="small"
            sx={{
              width: {xs: "8rem", sm: "8rem"},
            }}
            {...register("cantidad", {required: true})}
            type="number"
            value={quantity}
            onChange={(e) => {
              handleChange(e, setQuantity);
            }}
          />
          <Box>
            <Button
              variant=""
              sx={{
                width: {xs: "5rem", sm: "8rem"},
                height: {xs: "2rem", sm: "2.5rem"},
                fontSize: {xs: ".8rem", sm: "1rem"},
                padding: "5px",
                backgroundColor: "#000",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#333",
                },
                textTransform: "none",
              }}
              type="submit">
              Modificar
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
}
