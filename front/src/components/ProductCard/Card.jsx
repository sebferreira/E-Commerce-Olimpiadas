import {Box, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export default function Card({producto}) {
  return (
    <>
      <Box
        sx={{
          borderBottom: "1px solid #ccc",
          textDecoration: "none",
        }}
        component={Link}
        to={`/producto/${producto.id}`}>
        <Typography
          sx={{
            fontSize: {xs: "11px", md: "16px"},
            fontWeight: "bold",
            color: "#333",
            padding: "10px",
            margin: {md: 0, xl: "1rem"},
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}>
          {producto.descripcion} <br />
          {producto.deporte}
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: {xs: "11px", md: "16px"},
            fontWeight: "bold",
            color: "#333",
            padding: "10px",
          }}>
          Stock:{producto.stock}
          <br /> Precio:{producto.precio}
        </Typography>
      </Box>
    </>
  );
}
