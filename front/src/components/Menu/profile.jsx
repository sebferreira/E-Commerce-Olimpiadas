import Avatar from "@mui/material/Avatar";
import Logout from "@mui/icons-material/Logout";
import {useState} from "react";
import {
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  IconButton,
  Tooltip,
  ListItemButton,
} from "@mui/material";
import {useAuth} from "../../context/AuthContext";

export default function Profile() {
  const {user, logout} = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleLogout = () => {
    logout();
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const FirsLetter = user.nombre
    ? user.nombre[0].toUpperCase()
    : user.user.nombre[0].toUpperCase();
  const name = user.nombre ? user.nombre : user.user.nombre;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          marginRight: "1rem",
        }}>
        <Tooltip title="Tu cuenta">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{
              ml: 2,
              borderRadius: 2,
            }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}>
            <Avatar sx={{width: 32, height: 32}}>{FirsLetter}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{horizontal: "right", vertical: "top"}}
        anchorOrigin={{horizontal: "right", vertical: "bottom"}}>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{width: 27, height: 27, marginRight: "0.3rem"}} />
          {name}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemButton
            sx={{
              padding: 0,
            }}
            onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </ListItemButton>
        </MenuItem>
      </Menu>
    </>
  );
}
