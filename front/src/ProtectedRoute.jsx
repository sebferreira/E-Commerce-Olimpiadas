import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "./context/AuthContext";
import {Box} from "@mui/material";
import {CircularProgress} from "@mui/material";

function ProtectedRoute() {
  const {isAuthenticated, loading, user} = useAuth();
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}>
        <CircularProgress />
      </Box>
    );
  }
  if (!loading && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (user.rol === "admin") {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
