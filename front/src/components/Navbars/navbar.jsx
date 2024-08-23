import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavDrawer from "./Drawers/Drawer";
import {useState} from "react";
import {
  navAdminLinksCategory,
  navLinks,
  navLinksAuthenticated,
  navLinksCategory,
} from "../../scripts/NavbarLinks";
import {Link} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";
import Profile from "../Menu/profile";
import {buttonsDesktopHome} from "./Drawers/buttonsDrawers";
import zorro from "../../assets/zorrologo1.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const {isAuthenticated, user} = useAuth();

  const usuario = user ? user : null;
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "0",
          backgroundColor: "#fff",
          color: "#000",
          transition: "box-shadow 0.3s ease-in-out",
          transform: "scale(1.02)",
        }}>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "4rem",
            minHeight: "3.5rem",
            backgroundColor: "#fff",
            color: "#000",
          }}>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{
              display: {xs: "flex", md: "none"},
            }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              fontSize: {xs: "1.25rem", xl: "1.5rem"},
              fontWeight: "normal",
            }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#000",
                marginLeft: "1rem",
              }}>
              E-Commerce
            </Link>
          </Typography>
          <div>
            <Box
              sx={{
                display: {xs: "none", md: "flex"},
                gap: "1rem",
                height: "100%",
                alignItems: "center",
              }}>
              {navLinksCategory.map((item) =>
                buttonsDesktopHome(item, "#FFFF", "#000", usuario)
              )}
              {user &&
                user.rol === "admin" &&
                navAdminLinksCategory.map((item) =>
                  buttonsDesktopHome(item, "#FFFF", "#000", usuario)
                )}
            </Box>
          </div>
          <div
            style={{
              display: "flex",
              height: "100%",
            }}>
            <Box
              sx={{
                display: {xs: "none", md: "flex"},
                gap: "1rem",
                height: "100%",
                alignItems: "center",
              }}>
              {navLinksAuthenticated.map((item) => {
                return (
                  <Button
                    key={item.label}
                    style={{
                      height: "100%",
                      fontSize: "16px",
                      fontWeight: "bold",
                      textTransform: "none",
                      color: "white",
                    }}
                    component={Link}
                    to={item.href}>
                    {item.icon}
                  </Button>
                );
              })}
              {!isAuthenticated &&
                navLinks.map((item) => {
                  if (item.label === "Iniciar Sesion") {
                    return buttonsDesktopHome(item, "#000", "#FFF");
                  }
                  return buttonsDesktopHome(item, "#ffF", "#000");
                })}
            </Box>
            {user && <Profile user={user} />}
          </div>
          <Drawer
            open={open}
            anchor="left"
            onClose={() => setOpen(false)}
            sx={{
              display: {xs: "flex", md: "none"},
            }}>
            <NavDrawer />
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
}
