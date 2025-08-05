// src/contexts/ToastContext.jsx
import React, { createContext, useContext } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useThemeMode } from "./ThemeContext";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const { mode } = useThemeMode();

  const showToast = (message, type = "default") => {
    const options = {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: mode === "dark" ? "dark" : "light",
    };

    switch (type) {
      case "success":
        toast.success(message, options);
        break;
      case "error":
        toast.error(message, options);
        break;
      case "info":
        toast.info(message, options);
        break;
      case "warn":
        toast.warn(message, options);
        break;
      default:
        toast(message, options);
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer
        position="bottom-right"
        transition={Slide}
        newestOnTop
        limit={3}
        pauseOnFocusLoss
        draggable
        closeOnClick
        style={{
          fontSize: "0.9rem",
          fontFamily: "inherit",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
