import {useState} from "react";
import {Button, Divider, Modal, Typography, Box} from "@mui/material";
import {Link} from "react-router-dom";
import Carrito from "@mui/icons-material/AddShoppingCart";
import ModalProductView from "../Modals/ModalProductView";

export default function Card({producto}) {
  const [openModalView, setOpenModalView] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenModalView = () => setOpenModalView(true);
  const handleCloseModalView = () => setOpenModalView(false);
  const handleClose = () => {
    setAnchorEl(null);
  };
  let color = "Unisex";
  if (producto.genero === "Mujer") {
    color = "#ba0095";
  } else if (producto.genero === "Hombre") {
    color = "#0065ff";
  } else {
    color = "#172b4d";
  }
  return (
    <>
      <Box onClick={(() => handleClose, handleOpenModalView)}>
        <Box
          sx={{
            borderBottom: "1px solid #ccc",
            textDecoration: "none",
          }}>
          <Typography
            sx={{
              fontSize: {xs: "13px", sm: "17px"},
              fontWeight: "bold",
              color: "#000",
              padding: "10px",
              textOverflow: "ellipsis",
              whiteSpace: "initial",
              overflow: "hidden",
              height: "98px",
            }}>
            {producto.descripcion}
            <br />
            <Typography
              sx={{
                fontSize: {xs: "13px", sm: "17px"},
                marginTop: "1rem",
                color: "#000",
              }}>
              {producto.deporte}
              <br />
            </Typography>
          </Typography>

          <Typography
            component={Box}
            sx={{
              fontSize: {xs: "11px", sm: "16px"},
              fontWeight: "bold",
              color: color,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}>
            {producto.genero}
          </Typography>
          {/* <Divider /> */}
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: {xs: "11px", sm: "16px"},
              fontWeight: "bold",
              color: "#333",
              padding: "10px",
            }}>
            Stock:{producto.stock}
            <br /> Precio:{producto.precio}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}>
        {producto.stock > 0 && (
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
            onClick={() => {
              console.log("click");
            }}>
            <Carrito
              sx={{
                fontSize: {xs: "20px", sm: "25px"},
              }}
            />
          </Button>
        )}
        {!producto.stock && (
          <Typography
            sx={{
              fontSize: {xs: "11px", sm: "16px"},
              fontWeight: "bold",
              padding: "10px",
              borderRadius: 2,
              color: "red",
            }}>
            Sin Stock
          </Typography>
        )}
      </Box>
      <Modal
        open={openModalView}
        onClose={handleCloseModalView}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <ModalProductView producto={producto} />
      </Modal>
    </>
  );
}
