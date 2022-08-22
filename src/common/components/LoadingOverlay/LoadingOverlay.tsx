import { Backdrop, CircularProgress } from '@mui/material'

export function LoadingOverlay({ show = false }: { show?: boolean }) {
	return (
		<Backdrop
			sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
			open={show}
		>
			<CircularProgress color="inherit" />
		</Backdrop>
	)
}
