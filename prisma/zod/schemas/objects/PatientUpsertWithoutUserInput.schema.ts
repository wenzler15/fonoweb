import { z } from 'zod'
import { PatientUpdateWithoutUserInputObjectSchema } from './PatientUpdateWithoutUserInput.schema'
import { PatientUncheckedUpdateWithoutUserInputObjectSchema } from './PatientUncheckedUpdateWithoutUserInput.schema'
import { PatientCreateWithoutUserInputObjectSchema } from './PatientCreateWithoutUserInput.schema'
import { PatientUncheckedCreateWithoutUserInputObjectSchema } from './PatientUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.PatientUpsertWithoutUserInput> = z
	.object({
		update: z.union([
			z.lazy(() => PatientUpdateWithoutUserInputObjectSchema),
			z.lazy(() => PatientUncheckedUpdateWithoutUserInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => PatientCreateWithoutUserInputObjectSchema),
			z.lazy(() => PatientUncheckedCreateWithoutUserInputObjectSchema),
		]),
	})
	.strict()

export const PatientUpsertWithoutUserInputObjectSchema = Schema
