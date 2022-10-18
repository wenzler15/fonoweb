import { z } from 'zod'
import { DoctorPatientScalarWhereInputObjectSchema } from './DoctorPatientScalarWhereInput.schema'
import { DoctorPatientUpdateManyMutationInputObjectSchema } from './DoctorPatientUpdateManyMutationInput.schema'
import { DoctorPatientUncheckedUpdateManyWithoutDoctorPatientInputObjectSchema } from './DoctorPatientUncheckedUpdateManyWithoutDoctorPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientUpdateManyWithWhereWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => DoctorPatientScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => DoctorPatientUpdateManyMutationInputObjectSchema),
				z.lazy(
					() =>
						DoctorPatientUncheckedUpdateManyWithoutDoctorPatientInputObjectSchema,
				),
			]),
		})
		.strict()

export const DoctorPatientUpdateManyWithWhereWithoutPatientInputObjectSchema =
	Schema
