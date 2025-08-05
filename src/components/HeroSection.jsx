import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Title = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2.2rem, 6vw, 4rem)',
  fontWeight: 700,
  color: theme.palette.primary.main,
}));

const Author = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
  fontWeight: 500,
  color: theme.palette.text.disabled,
  marginTop: theme.spacing(1),
}));

const Highlight = styled('span')(({ theme }) => ({
  color: "#8a36a3",
  fontWeight: 800,
  fontSize:"28px",
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
  marginTop: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

const HeroSection = () => {
  return (
    <Box
      textAlign="center"
      className="animate__animated animate__fadeIn"
      sx={{ mb: 6 }}
    >
      <Title>Random Quote Generator</Title>
      <Author>
        by <Highlight>Terminal Wizard!</Highlight>
      </Author>
      <Subtitle>Inspire your day with a fresh quote every time you visit.</Subtitle>
    </Box>
  );
};

export default HeroSection;
