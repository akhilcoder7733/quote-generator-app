// src/pages/Login.jsx
import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useToast } from "../contexts/ToastContext";
import { useLoading } from "../contexts/LoadingContext";
import StyledTextField from "../components/StyledTextField";
import CustomButton from "../components/CustomButton";
import LoginImgBackground from "../assets/images/LoginCoverWide.jpg";
import "animate.css";

// Styled components using @mui/system
// New: Background Layer
const BackgroundWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1,
  backgroundImage: `url(${LoginImgBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  filter: theme.palette.mode === "dark" ? "brightness(0.5)" : "brightness(1.1)",
  transition: "filter 0.3s ease-in-out",
}));

const StyledContainer = styled(Box)(({ theme }) => ({
  minHeight: "90vh",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  overflow: "hidden",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: theme.spacing(4),
  borderRadius: "20px",
  maxWidth: "1000px",
  width: "100%",
  gap: theme.spacing(4),
  backdropFilter: "blur(16px)",
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(18, 18, 18, 0.6)"
      : "rgba(255, 255, 255, 0.6)",
  boxShadow: theme.shadows[5],
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: theme.spacing(3),
  },
}));

const LeftSide = styled(Box)(({ theme }) => ({
  flex: 1,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(3),
  borderRadius: "20px",
  background: "linear-gradient(135deg, #2a7b9b, #d36aa9, #539ded)",
  color: "#fff",
  transition: "all 0.3s ease-in-out",
  [theme.breakpoints.down("md")]: {
    minHeight: "30vh",
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: "20vh",
  },
}));

const RightSide = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    textAlign: "center",
  },
}));

const ExtraContent = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: theme.palette.text.secondary,
  fontSize: "0.9rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.85rem",
  },
}));

const Login = () => {
  const [username, setUsername] = useState("");
  const { login } = useAuth();
  const { showToast } = useToast();
  const { showLoader, hideLoader } = useLoading();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim()) {
      showToast("Please enter a username", "error");
      return;
    }

    showLoader();
    setTimeout(() => {
      login(username);
      showToast(`Welcome, ${username}!`, "success");
      hideLoader();
      navigate("/");
    }, 1000);
  };

  useEffect(() => {
    document.title = "Login - Terminal Wizard";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <StyledContainer>
      <BackgroundWrapper />
      <StyledBox className="animate__animated animate__fadeIn">
        {/* Left Side - Illustration & Text */}
        <LeftSide>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Welcome Back!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Explore curated developer insights, guides, and content once you log
            in.
          </Typography>
        </LeftSide>

        {/* Right Side - Form */}
        <RightSide>
          <Typography variant="h5" mb={2} fontWeight="bold">
            Login to Your Account
          </Typography>

          <StyledTextField
            label="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />

          <CustomButton onClick={handleLogin} sx={{ mt: 2, width: "100%" }}>
            Login
          </CustomButton>

          <ExtraContent>
            <Typography variant="body2" gutterBottom>
              No registration needed – just use any name and go!
            </Typography>
            <Typography variant="body2">
              Your session is saved locally for convenience.
            </Typography>
          </ExtraContent>
        </RightSide>
      </StyledBox>
    </StyledContainer>
  );
};

export default Login;
