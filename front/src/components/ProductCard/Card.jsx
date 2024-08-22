import {useState} from "react";
import {Button, Divider, Modal, Typography, Box} from "@mui/material";
import {Link} from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
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
              fontSize: {xs: "11px", sm: "16px"},
              fontWeight: "bold",
              color: "#333",
              padding: "10px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}>
            {producto.descripcion} <br />
            {producto.deporte}
            <br />
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
        </Box>
        <Divider />
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
          gap: "1rem",
        }}>
        <Button
          variant="contained"
          sx={{
            width: {xs: "4rem", sm: "8rem"},
            height: {xs: "2rem", sm: "2.5rem"},
            fontSize: "0.7rem",
            padding: "5px",
            backgroundColor: "#172b4d",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#004986",
            },
          }}
          onClick={() => {
            console.log("click");
          }}>
          <AddShoppingCartIcon />
        </Button>
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
