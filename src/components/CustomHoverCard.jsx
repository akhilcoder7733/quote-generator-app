// CustomHoverCard.jsx
import { Box, Typography, Divider, List, ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useAuth } from "../contexts/AuthContext";
import { useThemeMode } from "../contexts/ThemeContext";
import CustomButton from "./CustomButton";

// Styled hover container
const HoverContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "100%",
  right: 0,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  minWidth: 200,
  zIndex: 999,
  padding: theme.spacing(1),
  opacity: 0,
  visibility: "hidden",
  transform: "translateY(10px)",
  transition: "all 0.3s ease",
}));

// Wrapper that shows the container on hover
const HoverWrapper = styled(Box)(() => ({
  position: "relative",
  display: "inline-block",
  cursor: "pointer",
  '&:hover .hover-card': {
    opacity: 1,
    visibility: "visible",
    transform: "translateY(0)",
  },
}));

// Hover card wrapper
const CustomHoverCard = ({ label, icon, children }) => {
  return (
    <HoverWrapper>
      <Box display="flex" alignItems="center" gap={0.5}>
        <Typography>{label}</Typography>
        {icon}
      </Box>
      <HoverContainer className="hover-card">{children}</HoverContainer>
    </HoverWrapper>
  );
};

// Profile hover card component
export const ProfileHoverCard = ({ onLogout }) => {
  const { user } = useAuth();
  const { toggleTheme } = useThemeMode();

  return (
    <List>
      <ListItemButton>
        <ListItemText primary="Account Settings" />
      </ListItemButton>
      <ListItemButton onClick={toggleTheme}>
        <ListItemText primary="Theme Settings" />
      </ListItemButton>
      <Divider />
      {user ? (
        <ListItemButton onClick={onLogout} sx={{ mt: 1 }}>
          <ListItemText primary="Logout" />
        </ListItemButton>
      ) : (
        <CustomButton fullWidth to="/login">
          Login
        </CustomButton>
      )}
    </List>
  );
};

// Services hover card component
export const ServicesHoverCard = () => (
  <List>
    <ListItemButton>
      <ListItemText primary="Web Development" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="UI/UX Design" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Consulting" />
    </ListItemButton>
  </List>
);

export default CustomHoverCard;
