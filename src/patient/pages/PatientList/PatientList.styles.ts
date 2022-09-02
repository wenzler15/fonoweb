import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

export const CustomLink = styled(Link)(({ theme }) => ({
  border: 'none',
  outline: 'none',
  textDecoration: 'none',
  color: theme.palette.primary.main,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'underline'
  },
}))
