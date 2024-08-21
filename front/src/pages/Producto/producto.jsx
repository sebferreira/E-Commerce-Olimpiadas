import {Box, Typography} from "@mui/material";
import productos from "../../data/producto.json";
import {useParams} from "react-router-dom";

export default function ProductoVista() {
  const params = useParams();
  const producto = productos.find(
    (obj) => obj.id === Number(params.idProducto)
  );
  return (
    <Box
      xs={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        padding: "20px",
        backgroundColor: "lightgray",
        borderRadius: "20px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        margin: "20px",
        color: "#232323",
      }}>
      <Typography
        variant="h3"
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#232323",
        }}>
        {producto.descripcion}
      </Typography>
      <Typography
        variant="h5"
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#232323",
        }}>
        deporte:{producto.deporte}
      </Typography>
      <Typography
        variant="h5"
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#232323",
        }}>
        talle:{producto.talle}
      </Typography>
      <Typography
        variant="h5"
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#232323",
        }}>
        Caracteristicas:{producto.caracteristicas}
      </Typography>
      <Typography
        variant="h5"
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#232323",
        }}>
        Genero:{producto.genero}
      </Typography>
      <Typography
        variant="h5"
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#232323",
        }}>
        stock:{producto.stock}
      </Typography>
      <Typography
        variant="h5"
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#232323",
        }}>
        Precio{producto.precio}
      </Typography>
    </Box>
  );
}
