import { NavBar } from 'components/navBar'
import { Exercise } from '@prisma/client'
import { ReactElement, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pagination } from 'common/types'
import { Container } from './ExerciseList.styles'
import { Box, Button, Typography, useTheme } from '@mui/material'
import { useFindManyExercises } from 'exercise/queries'
import { useAuthStore } from 'auth/providers'
import { UserWithDoctor } from 'user/types'
import { ColumnDef } from '@tanstack/react-table'
import { LoadingOverlay, Table } from 'common/components'
import { ExerciseListActions } from 'exercise/components'

export function ExerciseList(): ReactElement {
	const user = useAuthStore(state => state.user) as UserWithDoctor

	const [pagination, setPagination] = useState<Required<Pagination>>({
		page: 0,
		size: 5,
	})

	const theme = useTheme()
	const navigate = useNavigate()

	const exercises = useFindManyExercises({
		where: {
			creatorId: user.id,
		},
		orderBy: {
			createdAt: 'desc',
		},
		take: pagination.size,
		skip: pagination.page * pagination.size,
	})

	const columns = useMemo(
		(): ColumnDef<Exercise>[] => [
			{
				header: 'Título',
				accessorKey: 'title',
				size: 100,
			},
			{
				header: 'Descrição',
				accessorKey: 'description',
				size: 700,
			},
			{
				header: 'Links',
				accessorKey: 'links',
				size: 500,
				// eslint-disable-next-line react/no-unstable-nested-components
				cell: ({ row }) => (
					<Box>
						{(row.original.links as string[]).map(link => (
							<>
								<a href={link} target="_blank" rel="noreferrer">
									{link}
								</a>
								<span>, </span>
							</>
						))}
					</Box>
				),
			},
		],
		[],
	)

	return (
		<Container>
			
			<Box sx={{ p: theme.spacing(4), pb: theme.spacing(9) }}>
				<Box
					display="flex"
					flexDirection="row"
					justifyContent="space-between"
					mb={t => t.spacing(4)}
				>
					<Typography variant="h4" component="h1" color="secondary">
						Exercícios
					</Typography>
					<Box display="flex" flexDirection="row" justifyContent="flex-end">
						<Button
							size="large"
							variant="contained"
							color="secondary"
							onClick={() => navigate('/exercises/create')}
						>
							Novo exercício
						</Button>
					</Box>
				</Box>
				<Table<Exercise>
					data={exercises.data?.result ?? []}
					columns={columns}
					initialPageSize={5}
					count={exercises.data?.count ?? 0}
					onPaginationChange={setPagination}
					actionsComponent={ExerciseListActions}
					texts={{
						empty: 'Nenhum exercício cadastrado',
					}}
				/>
			</Box>
			<LoadingOverlay show={exercises.isLoading} />
		</Container>
	)
}
