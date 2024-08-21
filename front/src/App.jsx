import {BrowserRouter, Routes, Route} from "react-router-dom";
//providers
import {AuthProvider} from "./context/AuthContext";
//navbars
import Navbar from "./components/Navbars/navbar";
//paginas
import Signin from "./pages/Signin/signin";
import Signup from "./pages/Signup/signup";
import Home from "./pages/Home/home";
import ProtectedRoute from "./ProtectedRoute";
import {Box, Typography} from "@mui/material";
export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main
                  style={{
                    height: "100%",
                    width: "100%",
                    overflowY: "hidden",
                  }}>
                  <Home />
                </main>
                <footer
                  style={{
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "#172b4d",
                    color: "#fff",
                    padding: "0.5rem",
                    textAlign: "center",
                  }}>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: {xs: "0.9rem", md: "1.1rem"},
                      }}
                      style={{
                        marginTop: "2rem",
                        marginBottom: "1rem",
                      }}>
                      2024 E.E.S.T N°4.
                    </Typography>
                  </Box>
                </footer>
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <main
                  style={{
                    height: "100vh",
                    width: "100%",
                  }}>
                  <Signin />
                </main>
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <main
                  style={{
                    height: "100vh",
                    width: "100%",
                  }}>
                  <Signup />
                </main>
              </>
            }
          />
          <Route element={<ProtectedRoute />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
