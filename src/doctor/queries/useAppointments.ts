import { Appointment, Doctor, Patient, User } from '@prisma/client'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { client } from 'common/client'
import { HTTPError } from 'ky'
import { AppointmentFindManySchema } from 'prisma/schemas/findManyAppointment.schema'
import { Merge, Simplify } from 'type-fest'
import { z } from 'zod'

export type AppointmentComplete = Simplify<
	Merge<
		Appointment,
		{
			doctor: Merge<Doctor, { user: User }>
			patient: Merge<Patient, { user: User }>
		}
	>
>

export function useAppointments(
	query?: z.infer<typeof AppointmentFindManySchema>,
	options?: UseQueryOptions<
		{ count: number; result: AppointmentComplete[] },
		HTTPError,
		{ count: number; result: AppointmentComplete[] }
	>,
) {
	return useQuery<{ count: number; result: AppointmentComplete[] }, HTTPError>(
		['appointments', query],
		() =>
			client('appointments', {
				method: 'POST',
				json: query,
			}).json(),
		{
			keepPreviousData: true,
			...options,
		},
	)
}
