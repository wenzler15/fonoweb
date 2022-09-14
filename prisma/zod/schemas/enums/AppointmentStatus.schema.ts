import { z } from 'zod'

export const AppointmentStatusSchema = z.enum([
	'SCHEDULED',
	'CONFIRMED',
	'CANCELED',
	'FINISHED',
])
