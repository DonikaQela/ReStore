import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];
const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];
const navStyles = {
  color: "inherit",
  typography: "h6",
  textdecoration: "none",
  "&.active": {
    color: "text.secondary",
  },
  "&:hover": {
    color: "grey.500",
  },
};
interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" component={NavLink} to="/" sx={navStyles}>
            Re-Store
          </Typography>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Box>

        {/* Center Section */}
        <List sx={{ display: "flex" }}>
          {midLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <Badge badgeContent="4" color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
