import ViewComfyAltIcon from "@mui/icons-material/ViewComfyAlt";
import {Button, Typography, Box} from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import CheckIcon from "@mui/icons-material/Check";
import EventIcon from "@mui/icons-material/Event";
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
  return (
    <Box sx={[style, {width: {xs: 250, lg: 400}, height: {xs: 500, xl: 600}}]}>
      <Box>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}>
          <ViewComfyAltIcon />
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              marginLeft: "1rem",
            }}>
            Titulo
          </Typography>
        </div>
        <Typography
          id="modal-modal-title"
          sx={{
            width: "100%" /* 
            textOverflow: "ellipsis", */,
            whiteSpace: "nowrap",
            overflowY: "hidden",
            scrollbarColor: "#262626 transparent",
            scrollbarWidth: "thin",
            scrollbarGutter: "stable",
          }}>
          {producto.descripcion}
        </Typography>
        <div
          style={{
            display: "flex",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}>
          <FormatAlignLeftIcon />
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
        <Typography id="modal-modal-title">{producto.precio}</Typography>
        <div
          style={{
            display: "flex",

            marginBottom: "1rem",
          }}>
          <EventIcon />
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
        </Typography>
        <div
          style={{
            display: "flex",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}>
          <CheckIcon />
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
        <Typography id="modal-modal-title">{producto.deporte}</Typography>
      </Box>
    </Box>
  );
}
