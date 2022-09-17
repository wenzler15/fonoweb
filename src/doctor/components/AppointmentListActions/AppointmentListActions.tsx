import { Stack } from '@mui/system'
import { AppointmentComplete } from 'doctor/queries/useAppointments'
import { ReactElement } from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function AppointmentListActions(_props: {
	original: AppointmentComplete
}): ReactElement {
	return (
		<Stack
			spacing={2}
			justifyContent="flex-end"
			direction={{ xs: 'column', sm: 'row' }}
			width={50}
		>
			{/*
        <Button size="small" variant="contained">
          Ver
        </Button>
      */}
		</Stack>
	)
}
