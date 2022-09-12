import { z } from 'zod'
import { SpecialtyUpdateWithoutEvaluationsInputObjectSchema } from './SpecialtyUpdateWithoutEvaluationsInput.schema'
import { SpecialtyUncheckedUpdateWithoutEvaluationsInputObjectSchema } from './SpecialtyUncheckedUpdateWithoutEvaluationsInput.schema'
import { SpecialtyCreateWithoutEvaluationsInputObjectSchema } from './SpecialtyCreateWithoutEvaluationsInput.schema'
import { SpecialtyUncheckedCreateWithoutEvaluationsInputObjectSchema } from './SpecialtyUncheckedCreateWithoutEvaluationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyUpsertWithoutEvaluationsInput> = z
	.object({
		update: z.union([
			z.lazy(() => SpecialtyUpdateWithoutEvaluationsInputObjectSchema),
			z.lazy(() => SpecialtyUncheckedUpdateWithoutEvaluationsInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => SpecialtyCreateWithoutEvaluationsInputObjectSchema),
			z.lazy(() => SpecialtyUncheckedCreateWithoutEvaluationsInputObjectSchema),
		]),
	})
	.strict()

export const SpecialtyUpsertWithoutEvaluationsInputObjectSchema = Schema
