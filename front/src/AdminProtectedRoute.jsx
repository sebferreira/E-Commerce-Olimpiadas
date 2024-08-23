import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "./context/AuthContext";
import {Box} from "@mui/material";
import {CircularProgress} from "@mui/material";

function AdminProtectedRoute() {
  const {isAdmin, loading} = useAuth();
  console.log(isAdmin)
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
  if (!loading && !isAdmin) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

export default AdminProtectedRoute;
