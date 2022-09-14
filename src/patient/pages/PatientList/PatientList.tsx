import { NavBar } from 'components/navBar'
import { ReactElement, useMemo, useState } from 'react'
import * as cpf from '@fnando/cpf'
import {
	FloatingWhatsAppButton,
	LoadingOverlay,
	Table,
} from 'common/components'
import { useNavigate } from 'react-router-dom'
import { ColumnDef } from '@tanstack/react-table'
import { usePatients } from 'patient/queries'
import { Pagination } from 'common/types'
import { useTheme, Box, Typography, Grid, Button, Avatar } from '@mui/material'
import { UserWithPatient } from 'user/types'
import { PatientListActions } from 'patient/pages/PatientList/PatientListActions'
import { CustomLink } from './PatientList.styles'
import { format } from 'date-fns/fp'

export function PatientList(): ReactElement {
	const [pagination, setPagination] = useState<Required<Pagination>>({
		page: 0,
		size: 10,
	})

	const theme = useTheme()
	const navigate = useNavigate()
	const patients = usePatients({ ...pagination, page: pagination.page + 1 })

	const columns = useMemo(
		(): ColumnDef<UserWithPatient>[] => [
			{
				header: '',
				accessorKey: 'avatar',
				size: 1,
				// eslint-disable-next-line react/no-unstable-nested-components
				cell: ({ row }) => (
					<Avatar
						alt={row.original.name}
						src={row.original.avatar ?? ''}
						sx={{ width: 40, height: 40 }}
					/>
				),
			},
			{
				header: 'Nome',
				accessorKey: 'name',
				// eslint-disable-next-line react/no-unstable-nested-components
				cell: ({ row }) => (
					<CustomLink to={`/patients/${row.original.patientData.id}`}>
						{row.original.name}
					</CustomLink>
				),
			},
			{
				header: 'Data de nascimento',
				accessorFn: row => format('dd/MM/yyyy', row.birthDate),
			},
			{
				header: 'CPF',
				accessorFn: row => cpf.format(row.cpf),
			},
		],
		[],
	)

	return (
		<>
			<NavBar />
			<Box sx={{ p: theme.spacing(4), pb: theme.spacing(9) }}>
				<Grid container>
					<Grid item xs={10}>
						<Typography
							variant="h4"
							component="h1"
							color="secondary"
							sx={{ mb: theme.spacing(4) }}
						>
							Pacientes
						</Typography>
					</Grid>
					<Grid item xs={2} sx={{ textAlign: 'right' }}>
						<Button
							sx={{ borderRadius: 0 }}
							variant="contained"
							size="large"
							color="primary"
							onClick={() => navigate('/patients/create')}
						>
							Novo Paciente
						</Button>
					</Grid>
				</Grid>

				<Table<UserWithPatient>
					data={patients.data?.result ?? []}
					columns={columns}
					count={patients.data?.total ?? 0}
					onPaginationChange={setPagination}
					actionsComponent={PatientListActions}
					texts={{
						empty: 'Nenhum paciente cadastrado',
					}}
				/>
			</Box>
			<LoadingOverlay show={patients.isLoading} />
		</>
	)
}
