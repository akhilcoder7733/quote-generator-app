// src/components/StyledTextField.jsx
import { TextField } from '@mui/material';
import { styled } from '@mui/system';

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& label': {
    color: theme.palette.text.secondary,
    fontWeight: 500,
  },
  '& .MuiInputBase-root': {
    borderRadius: '12px',
    backgroundColor: theme.palette.background.paper,
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
  },
}));

export default StyledTextField;
