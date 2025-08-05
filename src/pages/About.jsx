import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import PageWrapper from "../routes/PageWrapper";
import AkhilImg from "../assets/images/1753192663013.jpg";
import { useEffect } from "react";

const RootBox = styled(Box)(({ theme }) => ({
  minHeight: "90vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    minHeight: "80vh",
  },
}));

const FlexContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(4),
  maxWidth: "1200px",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: theme.spacing(2),
  overflow: "hidden",
  boxShadow: theme.shadows[3],
  maxWidth: "100%",
  img: {
    width: "100%",
    height: "auto",
    maxHeight: 500,
    borderRadius: theme.spacing(2),
    objectFit: "cover",
  },
}));

const TextBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    alignItems: "center",
  },
}));

const About = () => {
  useEffect(() => {
    document.title = "About - Terminal Wizard";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <PageWrapper>
      <RootBox>
        <FlexContainer>
          <ImageBox>
            <img src={AkhilImg} alt="Akhil" />
          </ImageBox>
          <TextBox>
            <Typography variant="h3" fontWeight={700}>
              About Me
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Hi, I’m Akhil — a passionate developer who loves turning creative
              ideas into functional digital experiences. With a strong foundation
              in frontend development and a hunger to learn modern technologies, I
              thrive on building clean, responsive, and user-centric interfaces.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Whether it’s designing pixel-perfect layouts or implementing complex
              UI logic, I aim for performance, accessibility, and elegance in
              everything I build.
            </Typography>
          </TextBox>
        </FlexContainer>
      </RootBox>
    </PageWrapper>
  );
};

export default About;
