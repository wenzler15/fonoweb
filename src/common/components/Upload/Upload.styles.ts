import styled from '@mui/material/styles/styled'
import { UploadProps } from 'common/components/Upload/Upload.types'

export const Label = styled('label')<Pick<UploadProps, 'error'>>(
	({ theme, error }) => ({
		width: '100%',
		cursor: 'pointer',
		border: error
			? `1px solid ${theme.palette.error.main}`
			: `1px solid ${theme.palette.grey[400]}`,
		color: error ? `${theme.palette.error.main}` : theme.palette.grey[600],
		display: 'flex',
		borderRadius: '28px',
		height: '56px',
		alignItems: 'center',
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
	}),
)

export const Root = styled('div')({
	width: '100%',
})
