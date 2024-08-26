import {Button, Typography, Box, TextField} from "@mui/material";
import Dinero from "@mui/icons-material/AttachMoney";
import ProductoNombre from "@mui/icons-material/ListAlt";
import Deporte from "@mui/icons-material/SportsBaseball";
import Detalles from "@mui/icons-material/Info";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {useAuth} from "../../context/AuthContext";
import {insertarPedido} from "../../queryFn";

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

export default function ModalProductView({producto}) {
  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm();
  const {user} = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = handleSubmit(async (data) => {
    data.cantidad = Number(data.cantidad);
    if (data.cantidad > producto.stock || data.cantidad <= 0) {
      return setErrorMessage("Ingresa una cantidad acorde al stock");
    }
    data.id_producto = producto.id_producto;
    const pedido = await insertarPedido(data, user.id_usuario);
    if (pedido) {
      setMessage("Pedido realizado con éxito");
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
          height: {xs: 530, xl: 600},
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
            Precio
          </Typography>
        </div>
        <Typography
          id="modal-modal-title"
          sx={{
            fontSize: " 18px",
          }}>
          ${producto.precio}
        </Typography>
        <Typography
          id="modal-modal-title"
          sx={{
            fontSize: " 18px",
          }}>
          Stock:{producto.stock}
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
            fontSize: " 18px",
            marginTop: "1rem",
            height: "auto",
            wordWrap: "break-word",
          }}>
          {producto.caracteristicas}
          <br />
          Talle:{producto.talle} <br />
          Tipo: {producto.tipo} <br />
          Genero: {producto.genero}
          <br />
        </Typography>
      </Box>
      {producto.stock > 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}>
          {user && (
            <form
              style={{
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
                  alignItems: "center",
                  gap: "1rem",
                }}>
                <TextField
                  id="standard-basic"
                  label="Cantidad"
                  size="small"
                  sx={{
                    width: {xs: "4rem", sm: "8rem"},
                  }}
                  {...register("cantidad", {required: true})}
                  type="number"
                />

                <Button
                  variant="contained"
                  sx={{
                    width: {xs: "7rem", sm: "9rem"},
                    height: {xs: "2rem", sm: "2.5rem"},
                    textTransform: "none",
                    fontSize: {xs: "0.7rem", sm: "0.9rem"},
                    padding: "5px",
                    backgroundColor: "#000",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#333",
                    },
                  }}
                  type="submit">
                  Agregar al carrito
                </Button>
              </Box>
            </form>
          )}
          {!user && (
            <Typography
              sx={{
                fontSize: {xs: "13px", sm: "16px"},
                fontWeight: "bold",
                padding: "10px",
                borderRadius: 2,
              }}>
              Debes Iniciar sesión para comprar
            </Typography>
          )}
        </Box>
      )}
      {!producto.stock && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}>
          <Typography
            id="modal-modal-title"
            sx={{
              fontSize: " 18px",
              color: "red",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}>
            Producto agotado
          </Typography>
        </Box>
      )}
    </Box>
  );
}
