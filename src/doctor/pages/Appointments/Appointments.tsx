import {
  Avatar,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { Box, Stack } from '@mui/system'
import { ColumnDef } from '@tanstack/react-table'
import { useAuthStore } from 'auth/providers'
import { LoadingOverlay, Table } from 'common/components'
import { Pagination } from 'common/types'
import { formatWithOptions, parseISO } from 'date-fns/fp'
import { AppointmentListActions } from 'doctor/components'
import {
  AppointmentComplete,
  useAppointments,
} from 'doctor/queries/useAppointments'
import { useMemo, useState } from 'react'
import { UserWithDoctor } from 'user/types'
import ptBr from 'date-fns/locale/pt-BR'
import { compose } from 'rambda'
import { DatePicker } from '@mui/x-date-pickers'
import {
  endOfMonth,
  endOfWeek,
  endOfYear,
  startOfMonth,
  startOfWeek,
  startOfYear,
} from 'date-fns'
import { useChangeEffect } from '@excelsia/hooks'

type Period = 'custom' | 'month' | 'week' | 'year'

const formatDate = compose(
  formatWithOptions({ locale: ptBr }, "dd 'de' MMMM 'de' yyyy"),
  parseISO,
)
const formatTime = compose(
  formatWithOptions({ locale: ptBr }, "H'H'"),
  parseISO,
)

export function Appointments() {
  const user = useAuthStore(state => state.user) as UserWithDoctor
  const [startDate, setStartDate] = useState<Date>(startOfWeek(new Date()))
  const [endDate, setEndDate] = useState<Date>(endOfWeek(new Date()))
  const [period, setPeriod] = useState<Period>('week')
  const [pagination, setPagination] = useState<Required<Pagination>>({
    page: 0,
    size: 10,
  })

  const appointments = useAppointments({
    where: {
      doctorId: user.doctorData.id,
      AND: [{ when: { lte: endDate } }, { when: { gte: startDate } }],
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: pagination.size,
    skip: pagination.page * pagination.size,
  })

  useChangeEffect(() => {
    switch (period) {
      case 'week':
        setStartDate(startOfWeek(new Date()))
        setEndDate(endOfWeek(new Date()))
        break
      case 'month':
        setStartDate(startOfMonth(new Date()))
        setEndDate(endOfMonth(new Date()))
        break
      case 'year':
        setStartDate(startOfYear(new Date()))
        setEndDate(endOfYear(new Date()))
        break
      default:
        break
    }
  }, [period])

  const columns = useMemo(
    (): ColumnDef<AppointmentComplete>[] => [
      {
        header: '',
        accessorKey: 'id',
        size: 10,
        // eslint-disable-next-line react/no-unstable-nested-components
        cell: ({ row }) => (
          <Avatar
            alt={row?.original?.Patient?.user?.name}
            src={row?.original?.Patient?.user?.avatar ?? ''}
            sx={{ width: 30, height: 30 }}
          />
        ),
      },
      {
        header: 'Paciente',
        accessorFn: row => row?.Patient?.user?.name,
        size: 200,
      },
      {
        header: 'Data',
        accessorKey: 'when',
        // eslint-disable-next-line react/no-unstable-nested-components
        cell: ({ row }) => (
          <Stack direction="row" spacing={1}>
            <Chip
              label={formatDate(row.original.when)}
              color="secondary"
              sx={{ width: 180 }}
            />
            <Chip
              label={formatTime(row.original.when)}
              color="primary"
              sx={{ width: 50 }}
            />
          </Stack>
        ),
      },
    ],
    [],
  )

  return (
    <Box p={4} pb={20}>
      <Paper sx={{ py: 5, px: 22 }}>
        <Typography component="div" fontWeight="bold" fontSize="2rem">
          Minhas consultas na agenda
        </Typography>
        <Stack direction="row" spacing={2} py={4}>
          <FormControl>
            <InputLabel>Período</InputLabel>
            <Select
              value={period}
              onChange={e => setPeriod(e.target.value as Period)}
              sx={{ width: 200 }}
            >
              <MenuItem value="week">Esta semana</MenuItem>
              <MenuItem value="month">Este mês</MenuItem>
              <MenuItem value="year">Este ano</MenuItem>
              <MenuItem value="custom">Personalizado</MenuItem>
            </Select>
          </FormControl>
          <DatePicker
            label="De"
            value={startDate}
            onChange={newStartDate => {
              setPeriod('custom')
              setStartDate(newStartDate ?? new Date())
            }}
            renderInput={params => <TextField {...params} />}
          />
          <DatePicker
            label="Até"
            value={endDate}
            onChange={newEndDate => {
              setPeriod('custom')
              setEndDate(newEndDate ?? new Date())
            }}
            renderInput={params => <TextField {...params} />}
          />
        </Stack>
        <Table<AppointmentComplete>
          data={appointments.data?.result ?? []}
          columns={columns}
          initialPageSize={10}
          count={appointments.data?.count ?? 0}
          onPaginationChange={setPagination}
          actionsComponent={AppointmentListActions}
          texts={{
            empty: 'Nenhum atendimento agendado neste período',
          }}
        />
      </Paper>
      <LoadingOverlay show={appointments.isLoading} />
    </Box>
  )
}
