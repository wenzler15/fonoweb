import { z } from 'zod'
import { DoctorUpdateWithoutUserInputObjectSchema } from './DoctorUpdateWithoutUserInput.schema'
import { DoctorUncheckedUpdateWithoutUserInputObjectSchema } from './DoctorUncheckedUpdateWithoutUserInput.schema'
import { DoctorCreateWithoutUserInputObjectSchema } from './DoctorCreateWithoutUserInput.schema'
import { DoctorUncheckedCreateWithoutUserInputObjectSchema } from './DoctorUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpsertWithoutUserInput> = z
	.object({
		update: z.union([
			z.lazy(() => DoctorUpdateWithoutUserInputObjectSchema),
			z.lazy(() => DoctorUncheckedUpdateWithoutUserInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => DoctorCreateWithoutUserInputObjectSchema),
			z.lazy(() => DoctorUncheckedCreateWithoutUserInputObjectSchema),
		]),
	})
	.strict()

export const DoctorUpsertWithoutUserInputObjectSchema = Schema
