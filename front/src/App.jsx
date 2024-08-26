//componentes
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer/footer";

//providers
import {AuthProvider} from "./context/AuthContext";

//navbars
import Navbar from "./components/Navbars/navbar";
import NavbarAuth from "./components/Navbars/navbarAuth";

//paginas
import Signin from "./pages/Signin/signin";
import Signup from "./pages/Signup/signup";
import Home from "./pages/Home/home";
import FilterPageByGender from "./pages/FilterPageByGender/filterPageByGender";
import DeportesController from "./pages/Sports/sports";
import FilterPageBySport from "./pages/FilterPageBySport/filterPageBySport";
import Carrito from "./pages/Carrito/carrito";
import Agregar from "./pages/AgregarProductos/agregar";
import Pagos from "./pages/Pagos/pagos";
import Direccion from "./pages/Direccion/direccion";
import CarritoPedidosCompletados from "./pages/CarritoPedidosCompletados/carritoPedidosCompletados";
import Ayuda from "./pages/Ayuda/ayuda";

//rutas protegidas
import ProtectedRoute from "./ProtectedRoute";
import AdminProtectedRoute from "./AdminProtectedRoute";
import PagosAprobados from "./pages/Pagos/aprobado";

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
                    overflowY: "hidden",
                    marginTop: "56px",
                  }}>
                  <Home />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/ayuda"
            element={
              <>
                <Navbar />
                <main
                  style={{
                    overflowY: "hidden",
                    marginTop: "56px",
                    width: "100%",
                    height: "100%",
                  }}>
                  <Ayuda />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <NavbarAuth />
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
                <NavbarAuth />
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
          <Route
            path="/productos/:genero"
            element={
              <>
                <Navbar />
                <main
                  style={{
                    overflowY: "hidden",
                    marginTop: "5rem",
                  }}>
                  <FilterPageByGender />
                </main>
              </>
            }
          />
          <Route
            path="/deportes"
            element={
              <>
                <Navbar />
                <main
                  style={{
                    overflowY: "hidden",
                    marginTop: "5rem",
                  }}>
                  <DeportesController />
                </main>
              </>
            }
          />
          <Route
            path="/productos/deportes/:deporte"
            element={
              <>
                <Navbar />
                <main
                  style={{
                    overflowY: "hidden",
                    marginTop: "5rem",
                  }}>
                  <FilterPageBySport />
                </main>
              </>
            }
          />
      <Route
            path="/productos/carrito"
            element={
              <>
                <Navbar />
                <main
                  style={{
                    overflowY: "hidden",
                    marginTop: "5rem",
                  }}>
                  <Carrito />
                </main>
              </>
            }
          />
          <Route
            path="/productos/carrito/completados"
            element={
              <>
                <Navbar />
                <main
                  style={{
                    overflowY: "hidden",
                    marginTop: "5rem",
                  }}>
                  <CarritoPedidosCompletados />
                </main>
              </>
            }
          />
          <Route element={<AdminProtectedRoute />}>
            <Route
              path="/agregar"
              element={
                <>
                  <Navbar />
                  <main
                    style={{
                      overflowY: "hidden",
                      marginTop: "5rem",
                    }}>
                    <Agregar />
                  </main>
                </>
              }
            />
          </Route>
          <Route element={<ProtectedRoute />}>
               
            <Route
              path="/pagos"
              element={
                <>
                  <Navbar />
                  <main
                    style={{
                      overflowY: "hidden",
                      marginTop: "5rem",
                      height: "100vh",
                    }}>
                    <Pagos />
                  </main>
                </>
              }
            />
            <Route
              path="/pagos/aprobado"
              element={
                <>
                  <Navbar />
                  <main
                    style={{
                      overflowY: "hidden",
                      marginTop: "5rem",
                      height: "100vh",
                    }}>
                    <PagosAprobados />
                  </main>
                </>
              }
            />
            <Route
              path="/direccion"
              element={
                <>
                  <Navbar />
                  <main
                    style={{
                      overflowY: "hidden",
                      marginTop: "5rem",
                    }}>
                    <Direccion />
                  </main>
                </>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
