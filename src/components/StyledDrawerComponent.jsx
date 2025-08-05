// StyledDrawerComponent.jsx

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Avatar,
  Switch,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";
import { X, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useThemeMode } from "../contexts/ThemeContext";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  ".MuiDrawer-paper": {
    width: 280,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    display: "flex",
    flexDirection: "column",
    borderBottomRightRadius:"20px",
    borderTopRightRadius:"20px",
    
  },
}));

const StyledList = styled(List)({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
});

const StyledListItem = styled(ListItem)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const BottomSection = styled(Box)(({ theme }) => ({
  marginTop: "auto",
  paddingTop: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const UserSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(2, 0),
}));

const ThemeToggleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2, 0),
}));

const navLinks = [
  { label: "Home", path: "/home" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Quotes", path: "/quote-generator" },
];

const StyledDrawerComponent = ({ open, onClose, onLogout, onLogin }) => {
  const { user } = useAuth();
  const { mode, toggleTheme } = useThemeMode();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <StyledDrawer anchor="left" open={open} onClose={onClose}>
      <motion.div
        initial={{ x: -280 }}
        animate={{ x: 0 }}
        exit={{ x: -280 }}
        transition={{ type: "spring", stiffness: 250, damping: 30 }}
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold">
            🌟 Random Quotes
          </Typography>
          <IconButton onClick={onClose}>
            <X />
          </IconButton>
        </Box>

        {user && (
          <UserSection>
            <Avatar sx={{ bgcolor: "primary.main" }}>
              {user.username.charAt(0).toUpperCase()}
            </Avatar>
            <Typography>{user.username}</Typography>
          </UserSection>
        )}

        <Divider />

        <StyledList>
          {navLinks.map((link) => (
            <StyledListItem
              button
              key={link.path}
              onClick={() => handleNavigate(link.path)}
              selected={location.pathname === link.path}
              sx={{
                bgcolor:
                  location.pathname === link.path
                    ? "action.selected"
                    : "transparent",
                fontWeight: location.pathname === link.path ? "bold" : "normal",
              }}
            >
              <ListItemText primary={link.label} />
            </StyledListItem>
          ))}
        </StyledList>

        <Divider />

        <ThemeToggleBox>
          <Typography>Theme</Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Moon size={16} />
            <Switch
              checked={mode === "dark"}
              onChange={toggleTheme}
              color="primary"
            />
            <Sun size={16} />
          </Stack>
        </ThemeToggleBox>

        <BottomSection>
          {user ? (
            <CustomButton
              variant="outlined"
              color="error"
              fullWidth
              onClick={onLogout}
            >
              Logout
            </CustomButton>
          ) : (
            <CustomButton fullWidth onClick={onLogin}>
              Login
            </CustomButton>
          )}
        </BottomSection>
      </motion.div>
    </StyledDrawer>
  );
};

export default StyledDrawerComponent;
