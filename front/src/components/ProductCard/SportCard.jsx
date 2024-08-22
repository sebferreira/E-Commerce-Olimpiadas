import {Typography, Box} from "@mui/material";
import {Link} from "react-router-dom";

export default function SportCard({deporte}) {
  return (
    <>
      <Box>
        <Box
          sx={{
            textDecoration: "none",
          }}
          component={Link}
          to={`/productos/deportes/${deporte.name}`}>
          <Typography
            sx={{
              fontSize: {xs: "13px", sm: "17px"},
              fontWeight: "bold",
              color: "#000",
              padding: "10px",
              textOverflow: "ellipsis",
              whiteSpace: "initial",
              overflow: "hidden",
              height: "fit-content",
            }}>
            {deporte.name}
            <br />
            <Typography
              sx={{
                fontSize: {xs: "13px", sm: "17px"},
                marginTop: "1rem",
                color: "#000",
              }}>
              {deporte.icon}
              <br />
            </Typography>
          </Typography>

          {/*  <Typography
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
          </Typography> */}
        </Box>
      </Box>
    </>
  );
}
