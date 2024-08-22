import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded"; /* 
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded"; */
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import CategoryIcon from "@mui/icons-material/Category";
import SportsIcon from "@mui/icons-material/Sports";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export const navLinks = [
  {
    label: "Iniciar Sesion",
    href: "/login",
    icon: <LoginRoundedIcon />,
  },
  {
    label: "Registrarse",
    href: "/register",
    icon: <HowToRegRoundedIcon />,
  },
];
export const navLinksAuthenticated = [
  {
    label: "Carrito",
    href: "/carrito",
    icon: <ShoppingCartIcon />,
  },
];
export const navLinksCategory = [
  {
    label: "Unisex",
    href: "/productos/Unisex",
    icon: <CategoryIcon />,
  },
  {
    label: "Hombres",
    href: "/productos/Hombre",
    icon: <ManIcon />,
  },
  {
    label: "Mujeres",
    href: "/productos/Mujer",
    icon: <WomanIcon />,
  },
  {
    label: "Deportes",
    href: "/deportes",
    icon: <SportsIcon />,
  },
];
