import { NavBar } from 'components/navBar'
import { ReactElement, useMemo, useState } from 'react'
import { FloatingWhatsAppButton, LoadingOverlay, Table } from 'common/components'
import { useNavigate } from 'react-router-dom'
import { ColumnDef } from '@tanstack/react-table'
import { usePatients } from 'patient/queries'
import { Pagination } from 'common/types'
import { useTheme, Fab, Box, Typography, Grid, Button } from '@mui/material'
import { UserWithPatient } from 'user/types'
import { PatientListActions } from 'patient/pages/PatientList/PatientListActions'

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
				header: 'Nome',
				accessorKey: 'name',
			},
			{
				header: 'Data de nascimento',
				accessorKey: 'birtDate',
			},
			{
				header: 'CPF',
				accessorKey: 'cpf',
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
          <Grid item xs={2} sx={{ textAlign: 'right'}}>
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
      <FloatingWhatsAppButton />
		</>
	)
}
