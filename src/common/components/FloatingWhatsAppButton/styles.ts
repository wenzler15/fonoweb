import { styled } from '@mui/system';

export const Container = styled('div')(({ theme }) => ({
  backgroundColor: '#128c7e',
  width: '50px',
  height: '50px',
  maxWidth: '50px',
  borderRadius: '50px',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // bottom: '50px',
  // right: '30px',
  color: 'white',
  overflow: 'hidden',
  bottom: theme.spacing(12),
	right: theme.spacing(4),
}));
