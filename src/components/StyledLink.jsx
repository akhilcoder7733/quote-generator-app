// StyledLink.jsx
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

// Styled span version to avoid <p> inside <p> issues
const StyledLink = styled('span')(({ theme }) => ({
  cursor: 'pointer',
  position: 'relative',
  display: 'inline-block',
  color: theme.palette.primary.main,
  fontWeight: 500,
  transition: 'color 0.3s ease',

  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: -2,
    height: 2,
    width: '0%',
    backgroundColor: theme.palette.primary.main,
    transition: 'width 0.3s ease',
  },

  '&:hover::after': {
    width: '100%',
  },

  '&:hover': {
    color: theme.palette.primary.dark,
  },

  '&:active': {
    color: theme.palette.secondary.main,
  },

  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}));

const LinkText = ({ to, children }) => {
  const navigate = useNavigate();
  return (
    <StyledLink onClick={() => navigate(to)}>
      {children}
    </StyledLink>
  );
};

export default LinkText;
