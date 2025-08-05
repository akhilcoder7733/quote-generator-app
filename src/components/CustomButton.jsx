// src/components/CustomButton.jsx
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: '12px',
  padding: '10px 24px',
  fontWeight: 'bold',
  textTransform: 'none',
  fontSize: '1rem',
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default CustomButton;
