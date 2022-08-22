import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export function Back() {
	const navigate = useNavigate()
	return (
		<Typography
			variant="subtitle2"
			color="primary"
			component="a"
			sx={{ display: 'flex', cursor: 'pointer', alignItems: 'center' }}
			onClick={() => navigate(-1)}
		>
			<KeyboardBackspaceIcon sx={{ mr: t => t.spacing(0.5) }} /> VOLTAR
		</Typography>
	)
}
