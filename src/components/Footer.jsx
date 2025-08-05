import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1.5),
  },
}));

const Footer = () => (
  <StyledFooter>
    <Typography
      variant="body1"
      sx={{
        fontWeight: 600,
        fontSize: { xs: "0.9rem", sm: "1rem" },
      }}
    >
      Random Quote Generator —{" "}
      <span style={{ color: "#17B8A6" }}>Terminal Wizard</span>
    </Typography>
    <Typography
      variant="body2"
      sx={{
        fontSize: { xs: "0.75rem", sm: "0.85rem" },
        color: "text.secondary",
      }}
    >
      © 2025 Akhil. All rights reserved.
    </Typography>
  </StyledFooter>
);

export default Footer;
