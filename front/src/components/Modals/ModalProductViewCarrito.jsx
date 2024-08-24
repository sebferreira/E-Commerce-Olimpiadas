import {Typography, Box} from "@mui/material";
import Dinero from "@mui/icons-material/AttachMoney";
import ProductoNombre from "@mui/icons-material/ListAlt";
import Detalles from "@mui/icons-material/Info";
import {useAuth} from "../../context/AuthContext";

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

export default function ModalProductViewCarrito({producto, estado, idUser}) {
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
            Id del usuario
          </Typography>
        </div>
        <Typography
          id="modal-modal-title"
          sx={{
            fontSize: " 18px",
          }}>
          {idUser}
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
          Tipo: {producto.tipo} <br />
          Genero: {producto.genero}
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
        <Typography id="modal-modal-title">{estado}</Typography>
      </Box>
    </Box>
  );
}
