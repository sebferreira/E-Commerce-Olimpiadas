import {useState} from "react";
import {Button, Modal, Typography, Box} from "@mui/material";
import {useNavigate} from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import {borrarPedido, borrarProductos} from "../../queryFn";
import {useAuth} from "../../context/AuthContext";
import ModalProductViewCarrito from "../Modals/ModalProductViewCarrito";
import ActualizarProductoCarrito from "../Modals/ModalUpdateProductCarrito";

export default function CardCarrito({producto, estado, idUser, idPedido}) {
  const {user} = useAuth();
  const [openModalView, setOpenModalView] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenModalView = () => setOpenModalView(true);
  const handleCloseModalView = () => setOpenModalView(false);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const handleDelete = async () => {
    const deleted = await borrarPedido(idPedido);
    if (deleted) navigate(0);
  };
  let color = "Unisex";
  if (producto.genero === "Mujer") {
    color = "#ba0095";
  } else if (producto.genero === "Hombre") {
    color = "#0065ff";
  } else {
    color = "#172b4d";
  }
  const usuario = user ? user : null;
  const retornaModal = (producto) => {
    if (usuario) {
      if (usuario.rol === "admin")
        return (
          <ActualizarProductoCarrito
            producto={producto}
            estado={estado}
            idUser={idUser}
            idPedido={idPedido}
          />
        );
      else
        return (
          <ModalProductViewCarrito
            producto={producto}
            estado={estado}
            idUser={idUser}
          />
        );
    } else
      return (
        <ModalProductViewCarrito
          producto={producto}
          estado={estado}
          idUser={idUser}
        />
      );
  };

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
            Estado:{estado}
            <br /> Precio: ${producto.precio}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}>
        <Button
          variant="contained"
          sx={{
            minWidth: "2rem",
            width: {xs: "2rem", sm: "4rem"},
            height: {xs: "2rem", sm: "2.5rem"},
            padding: "5px",
            backgroundColor: "#D32F2F",
            "&:hover": {
              backgroundColor: "#a32F2F",
            },
          }}
          onClick={handleDelete}>
          <DeleteIcon
            sx={{
              color: "#FFF",
            }}
          />
        </Button>
      </Box>
      <Modal
        open={openModalView}
        onClose={handleCloseModalView}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        {retornaModal(producto)}
      </Modal>
    </>
  );
}
