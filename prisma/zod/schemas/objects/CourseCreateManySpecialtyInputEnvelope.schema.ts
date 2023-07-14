import { z } from 'zod'
import { CourseCreateManySpecialtyInputObjectSchema } from './CourseCreateManySpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseCreateManySpecialtyInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => CourseCreateManySpecialtyInputObjectSchema),
			z.lazy(() => CourseCreateManySpecialtyInputObjectSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const CourseCreateManySpecialtyInputEnvelopeObjectSchema = Schema
