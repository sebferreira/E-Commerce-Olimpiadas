import {
  Box,
  ListItem,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import {Link} from "react-router-dom";
import {useAuth} from "../../../context/AuthContext";
import {navLinks, navLinksAuthenticated} from "../../../scripts/NavbarLinks";

export default function NavDrawer() {
  const {isAuthenticated} = useAuth();
  return (
    <>
      <Box sx={{width: 200}}>
        <nav>
          <List>
            {isAuthenticated &&
              navLinksAuthenticated.map((item) => {
                return (
                  <ListItem disablePadding key={item.label}>
                    <ListItemButton component={Link} to={item.href}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            {!isAuthenticated &&
              navLinks.map((item) => {
                return (
                  <ListItem disablePadding key={item.label}>
                    <ListItemButton component={Link} to={item.href}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
          </List>
        </nav>
      </Box>
    </>
  );
}
