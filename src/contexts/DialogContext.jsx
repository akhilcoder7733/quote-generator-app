import React, { createContext, useContext, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

const DialogContext = createContext();

export const DialogProvider = ({ children }) => {
  const [dialogConfig, setDialogConfig] = useState(null);
  const theme = useTheme();

  const showDialog = (config) => setDialogConfig(config);
  const closeDialog = () => setDialogConfig(null);

  return (
    <DialogContext.Provider value={{ showDialog }}>
      {children}
      <AnimatePresence>
        {dialogConfig && (
          // Inside <Dialog ...> (remove fullScreen prop)
          <Dialog
            open
            onClose={closeDialog}
            maxWidth="sm"
            fullWidth
            PaperComponent={motion.div}
            PaperProps={{
              initial: { opacity: 0, scale: 0.9, y: 40 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.9, y: 40 },
              transition: { duration: 0.35, ease: "easeInOut" },
              sx: {
                borderRadius: 3,
                px: { xs: 2, sm: 3 },
                py: { xs: 2, sm: 3 },
                mx: { xs: 2, sm: "auto" }, // horizontal margin on small screens
                my: { xs: 4, sm: 6 }, // vertical margin
                width: {
                  xs: "90%",
                  sm: "80%",
                  md: "60%",
                },
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[12],
              },
            }}
          >
            <DialogTitle
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
                pt: 2,
              }}
            >
              <Typography variant="h6" fontWeight={600}>
                {dialogConfig.title}
              </Typography>
              <IconButton onClick={closeDialog} size="small">
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            {/* <Divider sx={{ mb: 1 }} /> */}

            <DialogContent
              dividers
              sx={{
                maxHeight: "300px",
                overflowY: "auto",
                px: 2,
                py: 1,
              }}
            >
              <Typography variant="body1" color="text.secondary">
                {dialogConfig.content}
              </Typography>
            </DialogContent>

            <DialogActions sx={{ justifyContent: "flex-end", px: 3, pt: 2 }}>
              <Button
                onClick={closeDialog}
                variant="outlined"
                color="secondary"
                sx={{
                  textTransform: "none",
                  borderRadius: 2,
                  px: 3,
                  py: 1,
                  fontWeight: 500,
                }}
              >
                {dialogConfig.cancelText || "Cancel"}
              </Button>

              <Button
                onClick={() => {
                  closeDialog();
                  dialogConfig.onConfirm && dialogConfig.onConfirm();
                }}
                variant="contained"
                color="primary"
                sx={{
                  textTransform: "none",
                  borderRadius: 2,
                  px: 3,
                  py: 1,
                  fontWeight: 500,
                  ml: 2,
                }}
                autoFocus
              >
                {dialogConfig.confirmText || "Confirm"}
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </AnimatePresence>
    </DialogContext.Provider>
  );
};

export const useDialog = () => useContext(DialogContext);
