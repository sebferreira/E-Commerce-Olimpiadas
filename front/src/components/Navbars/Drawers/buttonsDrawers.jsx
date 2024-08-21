import {
  Button,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {Link} from "react-router-dom";

export const buttonsMobileDrawerHome = (item) => {
  console.log(item);
  return (
    <ListItem disablePadding key={item.label}>
      <ListItemButton component={Link} to={item.href}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.label} />
      </ListItemButton>
    </ListItem>
  );
};
export const buttonsDesktopHome = (item, bgColor, fontColor) => {
  return (
    <Button
      key={item.label}
      style={{
        backgroundColor: bgColor,
        borderRadius: 0,
        fontSize: "16px",
        fontWeight: "bold",
        textTransform: "none",
        paddingInline: "1.2rem",
        margin: 0,
        height: "100%",
        boxShadow: "none",
      }}
      variant="contained"
      component={Link}
      to={item.href}>
      <Typography
        style={{
          color: fontColor,
          fontWeight: "bold",
          fontSize: "1.1rem",
        }}>
        {item.label}
      </Typography>
    </Button>
  );
};
