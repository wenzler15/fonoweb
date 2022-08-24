import { styled } from '@mui/system';

export const Container = styled('div')(({ theme }) => ({
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  bottom: theme.spacing(12),
	right: theme.spacing(4),
}));

export const ButtonContent = styled('div')(({ theme }) => ({
  backgroundColor: '#128c7e',
  width: '50px',
  height: '50px',
  maxWidth: '50px',
  borderRadius: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  '&:hover': {
    backgroundColor: '#075e54'
  }
}));

export const Label = styled('label')(({ theme }) => ({
  fontWeight: 700,
  color: '#333',
  textTransform: 'uppercase',
  position: 'relative',
  display: 'block',
  marginTop: theme.spacing(1),
}));
