import { z } from 'zod'
import { AppointmentScalarWhereInputObjectSchema } from './AppointmentScalarWhereInput.schema'
import { AppointmentUpdateManyMutationInputObjectSchema } from './AppointmentUpdateManyMutationInput.schema'
import { AppointmentUncheckedUpdateManyWithoutAppointmentInputObjectSchema } from './AppointmentUncheckedUpdateManyWithoutAppointmentInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.AppointmentUpdateManyWithWhereWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => AppointmentScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => AppointmentUpdateManyMutationInputObjectSchema),
				z.lazy(
					() =>
						AppointmentUncheckedUpdateManyWithoutAppointmentInputObjectSchema,
				),
			]),
		})
		.strict()

export const AppointmentUpdateManyWithWhereWithoutPatientInputObjectSchema =
	Schema
