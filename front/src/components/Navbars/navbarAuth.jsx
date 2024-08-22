import {AppBar, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
export default function NavbarAuth() {
  return (
    <div
      style={{
        position: "relative",
      }}>
      <AppBar
        position="static"
        sx={{
          boxShadow: "0",
          backgroundColor: "#000",
          color: "#fff",
        }}>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "3rem",
            minHeight: "3.5rem",
            backgroundColor: "#000",
            color: "#fff",
          }}>
          <Typography
            variant="h6"
            sx={{flexGrow: 1, fontSize: {xs: "1.25rem", xl: "1.5rem"}}}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#FFFFFF",
                fontWeight: "bold",
                marginLeft: "1rem",
              }}>
              E-commerce
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
