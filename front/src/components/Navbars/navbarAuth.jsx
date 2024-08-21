import {AppBar, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
export default function NavbarAuth() {
  return (
    <div
      style={{
        position: "relative",
      }}>
      <AppBar position="static">
        <Toolbar
          style={{
            height: "3rem",
            minHeight: "3.5rem",
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
              }}>
              E-commerce
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
