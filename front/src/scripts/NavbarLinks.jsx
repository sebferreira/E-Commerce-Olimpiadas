import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded"; /* 
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded"; */
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
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
    label: "Mis Tableros",
    href: "/tables",
    icon: <AutoAwesomeMosaicIcon />,
  },
  /* 
   {
    label: "Profile",
    href: "/profile",
    icon: <AccountBoxRoundedIcon />,
  },  */
];

export const BoardLinks = [
  {
    label: "Volver",
    href: "/tables",
    icon: <ArrowBackIcon />,
  },
  {
    label: "Nuevo Tablero",
    href: "/boards/new",
    icon: <AddToPhotosIcon />,
  },
  {
    label: "Agregar Miembros",
    href: "/:boardId/invites",
    icon: <GroupAddOutlinedIcon />,
  },
];
