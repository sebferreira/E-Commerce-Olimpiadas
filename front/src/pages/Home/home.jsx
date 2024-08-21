import {Box, Container, Typography} from "@mui/material";

export default function Home() {
  return (
    <>
      <Container
        className="contenedor"
        style={{
          display: "flex",
          alignItems: "stretch",
          flexDirection: "row",
          width: "100%",
        }}>
        <Box
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}>
          <Box
            sx={{
              width: {xs: "15rem", sm: "35rem", md: "50rem"},
              marginTop: {xs: "2rem", sm: "2rem", md: "0"},
            }}>
            <Typography
              component="p"
              variant="h3"
              sx={{
                fontWeight: "bold",
                marginBottom: {xs: "1rem", sm: "2rem"},
              }}
              fontSize={{xs: "1.5rem", sm: "3rem", lg: "3rem", xl: "4rem"}}
              color={"#1c1a42"}>
              Compra aquí, compra bien.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}
