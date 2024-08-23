import {Box, Divider, List, Typography} from "@mui/material";
import {useAuth} from "../../../context/AuthContext";
import {
  navAdminLinksCategory,
  navLinks,
  navLinksAuthenticated,
  navLinksCategory,
} from "../../../scripts/NavbarLinks";
import {buttonsMobileDrawerHome} from "./buttonsDrawers";

export default function NavDrawer() {
  const {isAuthenticated, user} = useAuth();
  return (
    <>
      <Box sx={{width: 200}}>
        <nav>
          <List>
            {isAuthenticated &&
              navLinksAuthenticated.map((item) => {
                return buttonsMobileDrawerHome(item);
              })}

            {!isAuthenticated &&
              navLinks.map((item) => {
                return buttonsMobileDrawerHome(item);
              })}
            <Divider />
            <Typography
              variant="subtitle2"
              sx={{
                marginTop: "1rem",
                marginLeft: "1rem",
              }}>
              Categorias
            </Typography>
            {navLinksCategory.map((item) => {
              return buttonsMobileDrawerHome(item);
            })}
            {user &&
              user.rol === "admin" &&
              navAdminLinksCategory.map((item) => {
                return buttonsMobileDrawerHome(item);
              })}
          </List>
        </nav>
      </Box>
    </>
  );
}
