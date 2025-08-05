import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useForm } from "react-hook-form";
import StyledTextField from "../components/StyledTextField";
import { useToast } from "../contexts/ToastContext";
import { useLoading } from "../contexts/LoadingContext";

const Container = styled(Box)(({ theme }) => ({
  minHeight: "90vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: theme.spacing(2),
    minHeight:"80vh"
  },
}));

const FormWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "600px",
  width: "100%",
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[4],
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const Contact = () => {
  const { showToast } = useToast();
  const { showLoader, hideLoader } = useLoading();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    showLoader();
    await new Promise((resolve) => setTimeout(resolve, 1500));
    hideLoader();
    showToast("Message sent successfully!", "success");
    reset();
  };

  useEffect(() => {
    document.title = "Contact - Terminal Wizard";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Container>
      <FormWrapper component="form" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Contact Me
        </Typography>
        <StyledTextField
          label="Name"
          fullWidth
          {...register("name", { required: "Name is required" })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <StyledTextField
          label="Email"
          fullWidth
          {...register("email", {
            required: "Email is required",
            pattern: {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <StyledTextField
          label="Message"
          fullWidth
          multiline
          rows={4}
          {...register("message", { required: "Message is required" })}
          error={!!errors.message}
          helperText={errors.message?.message}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          sx={{ mt: 2, borderRadius: "12px" }}
        >
          Send Message
        </Button>
      </FormWrapper>
    </Container>
  );
};

export default Contact;
