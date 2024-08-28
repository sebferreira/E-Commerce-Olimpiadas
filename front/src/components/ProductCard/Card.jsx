import {useEffect, useState} from "react";
import {Button, Modal, Typography, Box} from "@mui/material";
import {useNavigate} from "react-router-dom";
import ModalProductView from "../Modals/ModalProductView";
import DeleteIcon from "@mui/icons-material/Delete";
import {borrarProductos, insertarPedido} from "../../queryFn";
import {useAuth} from "../../context/AuthContext";
import ActualizarProducto from "../Modals/ModalUpdateProduct";

export default function Card({producto}) {
  const {user} = useAuth();
  const [openModalView, setOpenModalView] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [message, setMessage] = useState("");
  const handleOpenModalView = () => setOpenModalView(true);
  const handleCloseModalView = () => setOpenModalView(false);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const handleDelete = async () => {
    const deleted = await borrarProductos(producto.id_producto);
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
        return <ActualizarProducto producto={producto} />;
      else return <ModalProductView producto={producto} />;
    } else return <ModalProductView producto={producto} />;
  };
  const handleCarrito = async () => {
    const body = {
      cantidad: 1,
      id_producto: producto.id_producto,
    };
    await insertarPedido(body, user.id_usuario);
    setMessage("Pediste este producto");
  };
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  });
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
        {message && (
          <Typography
            sx={{
              fontSize: "12px",
              color: "green",
              marginTop: "1rem",
            }}>
            {message}
          </Typography>
        )}
        <Box
          sx={{
            display: "flex",
            gap: "0.5rem",
          }}>
          {user && user.rol === "admin" && (
            <Button
              variant="contained"
              sx={{
                minWidth: "2rem",
                 width:"6rem",
                height: {xs: "2rem", sm: "2.5rem"},
                padding: "5px",
                backgroundColor: "#D32F2F",
                color:"#FFF",
                textDecoration:"none",
                "&:hover": {
                  backgroundColor: "#a32F2F",
                },
              }}
              onClick={handleDelete}>
              Eliminar
            </Button>
          )}
          {user && user.rol != "admin" && producto.stock > 0 && (
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
              onClick={handleCarrito}>
              Agregar al carrito
            </Button>
          )}
          {!user && (
            <Typography
              sx={{
                fontSize: {xs: "11px", sm: "16px"},
                fontWeight: "bold",
                padding: "10px",
                borderRadius: 2,
              }}>
              Inicia sesión para comprar
            </Typography>
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
