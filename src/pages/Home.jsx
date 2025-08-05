import React, { useEffect } from "react";
import PageWrapper from "../routes/PageWrapper";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import { Box } from "@mui/material";

function Home() {
  useEffect(() => {
    document.title = "Home - Terminal Wizard";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <PageWrapper>
      <Box sx={{ px: { xs: 2, md: 6 }, py: { xs: 4, md: 8 } }}>
        <HeroSection />
        <HowItWorks />
      </Box>
    </PageWrapper>
  );
}

export default Home;
