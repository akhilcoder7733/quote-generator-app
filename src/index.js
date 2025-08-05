import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProviderWrapper } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import { DialogProvider } from "./contexts/DialogContext";
import { ToastProvider } from "./contexts/ToastContext";
import { LoadingProvider } from "./contexts/LoadingContext";
import { BrowserRouter } from "react-router-dom";
import "react-step-progress-bar/styles.css";
import "reactflow/dist/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProviderWrapper>
        <AuthProvider>
          <ToastProvider>
            <LoadingProvider>
              <DialogProvider>
                <App />
              </DialogProvider>
            </LoadingProvider>
          </ToastProvider>
        </AuthProvider>
      </ThemeProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
