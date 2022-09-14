import { Edit } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Stack } from '@mui/system'
import { Exercise } from '@prisma/client'
import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'

export function ExerciseListActions({
	original,
}: {
	original: Exercise
}): ReactElement {
	const navigate = useNavigate()
	return (
		<Stack
			spacing={2}
			justifyContent="flex-end"
			direction={{ xs: 'column', sm: 'row' }}
			width={50}
		>
			<IconButton
				size="small"
				color="primary"
				onClick={() => navigate(`/exercises/${original.id}`)}
			>
				<Edit />
			</IconButton>
		</Stack>
	)
}
