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
          backgroundColor: "#FFF",
          color: "#000",
        }}>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "4rem",
            minHeight: "3.5rem",
            backgroundColor: "#FFF",
            color: "#000",
          }}>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
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
              E-commerce
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
