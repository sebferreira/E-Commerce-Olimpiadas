import {Box, Grid} from "@mui/material";
import productos from "../../data/producto.json";
import Card from "../ProductCard/Card";

export default function ProductsSection() {
  return (
    <Box
      sx={{
        marginLeft: {xs: "0", lg: "16rem"},
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
          padding: "2rem",
          display: "flex",
          justifyContent: {xs: "center", xl: "flex-start"},
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
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",

                color: "black",
                padding: "1.5rem",

                height: 200,
                width: 100,
              }}>
              <Card producto={producto} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
