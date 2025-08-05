// src/components/SplashScreen.jsx
import { Box, Typography, LinearProgress } from "@mui/material";
import Logo from "../assets/images/logo.png";

const SplashScreen = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(-45deg, #17B8A6, #38bdf8, #F50057, #f50ae3)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 8s ease infinite, fadeIn 2s ease-in-out",
        color: "#fff",
        textAlign: "center",
        padding: 2,
      }}
    >
      {/* Logo */}
      <img
        src={Logo}
        alt="Logo"
        style={{
          width: "120px",
          height: "120px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "1.5rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      />

      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
          mb: 2,
        }}
      >
        Terminal Wizard
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="h5"
        sx={{
          fontStyle: "italic",
          fontWeight: 400,
          color: "#fff",
          textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
        }}
      >
        by <span style={{ fontWeight: 700 }}>Akhil</span>
      </Typography>

      {/* Progress bar container */}
      <Box sx={{ width: "70%", mt: 4 }}>
        <LinearProgress
          sx={{
            height: 8,
            borderRadius: "5px",
            backgroundColor: "rgba(255,255,255,0.2)",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#fff",
            },
          }}
        />
      </Box>

      {/* Keyframes */}
      <style>
        {`
          @keyframes gradientBG {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
};

export default SplashScreen;
