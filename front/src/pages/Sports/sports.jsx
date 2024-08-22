import {Box, Grid} from "@mui/material";
import SportCard from "../../components/ProductCard/SportCard";
import {deportes} from "../../scripts/deportes";

export default function DeportesController() {
  return (
    <>
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
          {deportes.map((deporte) => {
            return (
              <Grid
                item
                xs={3}
                sm={3}
                md={3}
                lg={3}
                key={deporte.name}
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
                  height: "100px",
                  width: "100px",
                }}>
                <SportCard deporte={deporte} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
