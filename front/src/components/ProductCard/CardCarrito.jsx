import {useState} from "react";
import {Button, Modal, Typography, Box} from "@mui/material";
import {useNavigate} from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import {borrarPedido} from "../../queryFn";
import {useAuth} from "../../context/AuthContext";
import ModalProductViewCarrito from "../Modals/ModalProductViewCarrito";
import ActualizarProductoCarrito from "../Modals/ModalUpdateProductCarrito";
import Editar from "@mui/icons-material/ModeEdit";
import ModalProductUpdateCartUser from "../Modals/ModalUpdateProductCartUser";

export default function CardCarrito({producto, estado, idUser, idPedido}) {
  const {user} = useAuth();
  const [openModalView, setOpenModalView] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const montoTotal =
    Number(producto.Pedidos_Productos.cantidad) * Number(producto.precio);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenModalUpdate = () => setOpenModalUpdate(true);
  const handleCloseModalUpdate = () => setOpenModalUpdate(false);
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
  let colorEstado = "";
  if (estado === "Pendiente") {
    colorEstado = "#fa200f";
  } else if (estado === "Pendiente de entrega") {
    colorEstado = "#f06f36";
  } else {
    colorEstado = "#4caf50";
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
              paddingTop: "10px",
              paddingLeft: "10px",
              paddingRight: "10px",
              display: "flex",
            }}>
            Estado:{""} &nbsp;
            <Typography
              sx={{
                fontWeight: "bold",
                color: colorEstado,
                fontSize: {xs: "11px", sm: "16px"},
              }}>
              {estado}
            </Typography>
          </Typography>
          <Typography
            sx={{
              fontSize: {xs: "11px", sm: "16px"},
              fontWeight: "bold",
              color: "#333",
              paddingRight: "10px",
              paddingLeft: "10px",
              paddingBottom: "10px",
            }}>
            Precio total: ${montoTotal} <br />
            Cantidad: {producto.Pedidos_Productos.cantidad}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}>
        {estado !== "Completado" && (
          <Button
            color="error"
            variant="outlined"
            sx={{
              minWidth: "2rem",
              width: {xs: "4rem", sm: "6rem"},
              height: {xs: "2rem", sm: "2.5rem"},
              padding: "5px",
              textTransform: "none",
            }}
            onClick={handleDelete}>
            Quitar
          </Button>
        )}
        {user &&
          user.rol !== "admin" &&
          estado !== "Pendiente de entrega" &&
          estado !== "Completado" && (
            <Button
              variant="outlined"
              color="info"
              sx={{
                minWidth: "2rem",
                width: {xs: "5rem", sm: "6rem"},
                height: {xs: "2rem", sm: "2.5rem"},
                padding: "5px",
                textTransform: "none",
              }}
              onClick={(() => handleClose, handleOpenModalUpdate)}>
              Modificar
            </Button>
          )}
      </Box>
      <Modal
        open={openModalView}
        onClose={handleCloseModalView}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        {retornaModal(producto)}
      </Modal>
      <Modal
        open={openModalUpdate}
        onClose={handleCloseModalUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <ModalProductUpdateCartUser
          producto={producto}
          estado={estado}
          idUser={idUser}
          cantidad={producto.Pedidos_Productos.cantidad}
          idPedido={idPedido}
        />
      </Modal>
    </>
  );
}
