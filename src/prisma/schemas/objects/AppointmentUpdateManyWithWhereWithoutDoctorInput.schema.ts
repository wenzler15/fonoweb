import { z } from 'zod'
import { AppointmentScalarWhereInputObjectSchema } from './AppointmentScalarWhereInput.schema'
import { AppointmentUpdateManyMutationInputObjectSchema } from './AppointmentUpdateManyMutationInput.schema'
import { AppointmentUncheckedUpdateManyWithoutAppointmentsInputObjectSchema } from './AppointmentUncheckedUpdateManyWithoutAppointmentsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AppointmentUpdateManyWithWhereWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => AppointmentScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => AppointmentUpdateManyMutationInputObjectSchema),
				z.lazy(
					() =>
						AppointmentUncheckedUpdateManyWithoutAppointmentsInputObjectSchema,
				),
			]),
		})
		.strict()

export const AppointmentUpdateManyWithWhereWithoutDoctorInputObjectSchema =
	Schema
