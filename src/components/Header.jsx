// Header.jsx
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  useTheme,
  useMediaQuery,
  Fade,
  Fab,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, ChevronDown, Moon, Sun, AArrowUpIcon } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useThemeMode } from "../contexts/ThemeContext";
import { useDialog } from "../contexts/DialogContext";
import { useToast } from "../contexts/ToastContext";
import { useLoading } from "../contexts/LoadingContext";
import CustomHoverCard, {
  ProfileHoverCard,
  ServicesHoverCard,
} from "./CustomHoverCard";
import CustomButton from "./CustomButton";
import LinkText from "./StyledLink";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import StyledDrawerComponent from "./StyledDrawerComponent";

const HeaderBox = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: 0,
  zIndex: 1100,
  backdropFilter: "blur(8px)",
  backgroundColor: theme.palette.background.paper + "CC",
  padding: "0.8rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "15vh",
  transition: "box-shadow 0.3s ease",
  [theme.breakpoints.down("md")]: {
    padding: "0.6rem 1rem",
    minHeight: "10vh",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0.6rem 1rem",
    minHeight: "10vh",
  },
}));

const MotionHeaderBox = motion(HeaderBox);

const LogoBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

const LinksBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const LoginUserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const UserTrigger = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.3rem",
  cursor: "pointer",
  transition: "0.3s ease",
  "&:hover .rotate-icon": {
    transform: "rotate(180deg)",
  },
});

const RotateIcon = styled(ChevronDown)({
  transition: "transform 0.3s ease",
});

const BackToTop = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: "2rem",
  right: "2rem",
  zIndex: 1000,
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
}));

const navLinks = [
  { label: "Home", path: "/home" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Quotes", path: "/quote-generator" },
  { label: "Services", path: "/#" },
];

const Header = () => {
  const { user, logout } = useAuth();
  const { mode, toggleTheme } = useThemeMode();
  const { showDialog } = useDialog();
  const { showToast } = useToast();
  const { showLoader, hideLoader } = useLoading();
  const navigate = useNavigate();
  const location = useLocation();
  const isActiveLink = (path) => location.pathname === path;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  // Motion scroll handling
  const scrollY = useMotionValue(0);
  const springY = useSpring(scrollY, { stiffness: 100, damping: 20 });
  const boxShadow = useTransform(springY, (y) =>
    y > 20 ? "0 4px 12px rgba(0,0,0,0.15)" : "0 0px 0px rgba(0,0,0,0)"
  );

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const handleLogout = () => {
    showDialog({
      title: "Confirm Logout",
      content: "Are you sure you want to logout?",
      confirmText: "Yes, Logout",
      cancelText: "Cancel",
      onConfirm: () => {
        showLoader();
        setTimeout(() => {
          logout();
          hideLoader();
          showToast("Logged out successfully!", "info");
          navigate("/login");
        }, 1000);
      },
    });
  };

  return (
    <MotionHeaderBox style={{ boxShadow }}>
      {/* Left: Logo + Drawer Button (on mobile) */}
      <LogoBox>
        {isMobile && (
          <IconButton color="inherit" onClick={() => setOpenDrawer(true)}>
            <Menu />
          </IconButton>
        )}
        <Typography variant="h6" fontWeight="bold">
          🌟 Random Quotes
        </Typography>
      </LogoBox>

      {/* Center: Navigation Links */}
      <LinksBox>
        {navLinks.map((link) => {
          const isActive = isActiveLink(link.path);

          const StyledNavLink = styled(LinkText)(({ theme }) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive
              ? theme.palette.primary.main
              : theme.palette.text.primary,
            borderBottom: isActive
              ? `2px solid ${theme.palette.primary.main}`
              : "none",
            paddingBottom: 4,
            transition: "all 0.3s ease",
          }));

          if (link.label === "Services") {
            return (
              <CustomHoverCard
                key={link.path}
                label={
                  <StyledNavLink to={link.path}>{link.label}</StyledNavLink>
                }
              >
                <ServicesHoverCard />
              </CustomHoverCard>
            );
          }

          return (
            <StyledNavLink key={link.path} to={link.path}>
              {link.label}
            </StyledNavLink>
          );
        })}
      </LinksBox>

      {/* Right: Theme Toggle + Login/Logout */}
      <LoginUserBox>
        <IconButton onClick={toggleTheme} color="inherit">
          {mode === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </IconButton>

        {user ? (
          <CustomHoverCard
            label={
              <UserTrigger>
                <Avatar sx={{ width: 32, height: 32, fontSize: 14 }}>
                  {user.username.charAt(0).toUpperCase()}
                </Avatar>
                <RotateIcon className="rotate-icon" size={18} />
              </UserTrigger>
            }
          >
            <ProfileHoverCard onLogout={handleLogout} />
          </CustomHoverCard>
        ) : (
          <CustomButton onClick={() => navigate("/login")}>Login</CustomButton>
        )}
      </LoginUserBox>

      {/* Back to Top FAB */}
      <Fade in={showTopBtn}>
        <BackToTop
          size="small"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <AArrowUpIcon />
        </BackToTop>
      </Fade>

      {/* Mobile Drawer */}
      <StyledDrawerComponent
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onLogout={() => {
          setOpenDrawer(false); // 👈 close drawer first
          handleLogout(); // 👈 confirm logout
        }}
        onLogin={() => {
          setOpenDrawer(false); // 👈 close drawer first
          navigate("/login"); // 👈 go to login
        }}
      />
    </MotionHeaderBox>
  );
};

export default Header;
