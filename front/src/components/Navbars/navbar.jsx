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
  navLinks,
  navLinksAuthenticated,
  navLinksCategory,
} from "../../scripts/NavbarLinks";
import {Link} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";
import Profile from "../Menu/profile";
import {buttonsDesktopHome} from "./Drawers/buttonsDrawers";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const {isAuthenticated, user} = useAuth();
  console.log(isAuthenticated, user);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "0",
        }}>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "3rem",
            minHeight: "3.5rem",
            backgroundColor: "#172b4d",
            color: "#FFFF",
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
            sx={{fontSize: {xs: "1.25rem", xl: "1.5rem"}}}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#FFFF",
                fontWeight: "bold",
              }}>
              E-Commerce
            </Link>
          </Typography>
          <div>
            {isAuthenticated && (
              <Box
                sx={{
                  display: {xs: "none", md: "flex"},
                  gap: "1rem",
                  height: "100%",
                  alignItems: "center",
                }}>
                {navLinksCategory.map((item) => {
                  return buttonsDesktopHome(item, "#172b4d", "#FFF");
                })}
              </Box>
            )}
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
              {isAuthenticated &&
                navLinksAuthenticated.map((item) => {
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
                      variant="text"
                      component={Link}
                      to={item.href}>
                      {item.icon}
                    </Button>
                  );
                })}
              {!isAuthenticated &&
                navLinks.map((item) => {
                  if (item.label === "Iniciar Sesion") {
                    return buttonsDesktopHome(item, "#172b4d", "#FFF");
                  }
                  return buttonsDesktopHome(item, "#FFFF", "#172b4d");
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
