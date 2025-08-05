import React, { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = '404 - Not Found | Terminal Wizard';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Box
      sx={{
        height: '80vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Sorry, the page you're looking for doesn't exist.
      </Typography>
      <Button variant="contained" onClick={() => navigate('/')}>
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
