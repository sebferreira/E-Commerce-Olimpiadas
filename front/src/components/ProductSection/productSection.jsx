import {Box, Grid} from "@mui/material";
import productos from "../../data/producto.json";
import Card from "../ProductCard/Card";

export default function ProductsSection() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        overflowX: "auto",
        scrollbarColor: "#262626 transparent",
        scrollbarWidth: "thin",
        scrollbarGutter: "stable",
      }}>
      <Grid
        container
        sx={{
          gap: "1.5rem",
          padding: {xs: "1rem", sm: "2rem"},
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
        {productos.map((producto) => {
          return (
            <Grid
              item
              xs={5}
              sm={6}
              md={4}
              lg={2.5}
              key={producto.id}
              sx={{
                backgroundColor: "#F5F5F5",
                borderRadius: 2,
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#E0E0E0",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "box-shadow 0.3s ease-in-out",
                  transform: "scale(1.02)",
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: {xs: "space-evenly", sm: "space-between"},
                color: "black",
                padding: ".5rem",
                height: {xs: "250px", sm: "320px"},
                width: {xs: "200px", sm: "100"},
              }}>
              <Card producto={producto} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
