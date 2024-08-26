import {Box, Container, Typography} from "@mui/material";

export default function Ayuda() {
  return (
    <>
      <Container
        className="contenedor"
        style={{
          maxWidth: "100%",
          width: "100%",
          padding: "0",
        }}>
        <Box
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "2rem",
            color: "black",
          }}>
          <Box
            sx={{
              backgroundColor: "#F5F5F5",
              borderRadius: 2,
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                transition: "box-shadow 0.3s ease-in-out",
                transform: "scale(1.02)",
              },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "black",
              padding: ".5rem",
              height: {xs: "600px", sm: "800px"},
              width: {xs: "320px", sm: "500px"},
            }}>
            <Typography
              sx={{
                fontSize: {xs: "1.2rem", md: "1.5rem"},
                marginBottom: "1rem",
                height: "fit-content",
                color: "black",
              }}>
              Ayuda
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}
