import {Box, Typography} from "@mui/material";
import linkedin from "../../assets/pngwing.com.png";
import github from "../../assets/github-pages-logo-repository-fork-github-86eddab19cbc3ae293ada0fe0fb9e27d.png";
import Ayuda from "@mui/icons-material/HelpOutline";
import {participantes} from "../../scripts/footer";

export default function Footer() {
  return (
    <footer
      style={{
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#000",
        color: "#fff",
        padding: "0.5rem",
        textAlign: "center",
        paddingTop: "4rem",
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "1rem",
          alignItems: "center",
          padding: "0.5rem",
        }}>
        <Box>
          <Typography
            component="p"
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontSize: {xs: "1rem", md: "1.5rem"},
              marginBottom: "0.5rem",
              marginTop: "1rem",
            }}>
            Ayuda
          </Typography>
          <a
            href="/ayuda"
            style={{
              color: "#fff",
              textDecoration: "none",
            }}>
            <Ayuda
              sx={{
                fontSize: "2rem",
                marginLeft: "0.5rem",
              }}
            />
          </a>
        </Box>

        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "1rem",
            borderLeft: "2px solid #FFF",
            paddingLeft: "2rem",
          }}>
          <Typography
            component="p"
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontSize: {xs: "1rem", md: "1.5rem"},
              marginBottom: "0.5rem",
              marginTop: "1rem",
            }}>
            Contactos
          </Typography>
          {participantes.map((participante) => {
            return (
              <>
                <Typography
                  component="p"
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    fontSize: {xs: "0.7rem", md: "1rem"},
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}>
                  {participante.rol}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                  }}>
                  <a
                    href={participante.linkedin}
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                    }}>
                    <img
                      src={linkedin}
                      alt="linkedin"
                      style={{
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </a>
                  <a href={participante.github}>
                    <img
                      src={github}
                      alt="github"
                      style={{
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </a>
                </div>
              </>
            );
          })}
        </Box>
      </Box>
      <Box>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: {xs: "0.9rem", md: "1.1rem"},
            fontWeight: "bold",
            marginTop: "2rem",
            marginBottom: "1rem",
          }}>
          2024 E.E.S.T N°4.
        </Typography>
      </Box>
    </footer>
  );
}
