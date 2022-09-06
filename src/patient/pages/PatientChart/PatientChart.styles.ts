import { styled } from '@mui/system'

export const Title = styled('div')(({ theme }) => ({
	border: 'none',
	outline: 'none',
	padding: 0,
	fontSize: '30px',
	color: theme.palette.secondary.main,
	backgroundColor: 'transparent',
	display: 'flex',
	alignItems: 'center',
	'&:hover': {
		backgroundColor: 'transparent',
	},
}))
