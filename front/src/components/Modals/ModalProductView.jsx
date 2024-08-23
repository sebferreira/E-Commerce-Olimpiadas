import {Button, Typography, Box, TextField} from "@mui/material";
import Dinero from "@mui/icons-material/AttachMoney";
import ProductoNombre from "@mui/icons-material/ListAlt";
import Deporte from "@mui/icons-material/SportsBaseball";
import Detalles from "@mui/icons-material/Info";
import Stock from "@mui/icons-material/Inventory";
import Carrito from "@mui/icons-material/AddShoppingCart";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";

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
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = handleSubmit((data) => {
    if (data.cantidad > producto.stock || data.cantidad <= 0) {
      return setErrorMessage("Ingresa una cantidad acorde al stock");
    }
    console.log(data);
  });
  useEffect(()=>{
    const timer=setTimeout(()=>{
      setErrorMessage("")
    },3000)
    return ()=> clearTimeout(timer)
  }, [setErrorMessage])
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
        <Typography id="modal-modal-title">
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
          <form
            style={{
              display: "flex",
              gap: "1rem",
              width: "100%",
              flexDirection: "column",
              alignItems:"flex-end",
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
              <Box sx={{
                display: "flex",
                flexDirection: "row",
                gap:"1rem"
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
                width: {xs: "4rem", sm: "8rem"},
                height: {xs: "2rem", sm: "2.5rem"},
                fontSize: "0.7rem",
                padding: "5px",
                backgroundColor: "#000",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
              type="submit">
              <Carrito
                sx={{
                  fontSize: {xs: "20px", sm: "25px"},
                }}
                />
            </Button>
      </Box>
          </form>
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
