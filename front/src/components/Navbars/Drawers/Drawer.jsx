import {Box, Divider, List} from "@mui/material";
import {useAuth} from "../../../context/AuthContext";
import {
  navLinks,
  navLinksAuthenticated,
  navLinksCategory,
} from "../../../scripts/NavbarLinks";
import {buttonsMobileDrawerHome} from "./buttonsDrawers";

export default function NavDrawer() {
  const {isAuthenticated} = useAuth();
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
            {navLinksCategory.map((item) => {
              return buttonsMobileDrawerHome(item);
            })}
          </List>
        </nav>
      </Box>
    </>
  );
}
