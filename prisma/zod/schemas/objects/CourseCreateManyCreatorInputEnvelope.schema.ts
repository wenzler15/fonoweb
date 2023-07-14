import { z } from 'zod'
import { CourseCreateManyCreatorInputObjectSchema } from './CourseCreateManyCreatorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseCreateManyCreatorInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => CourseCreateManyCreatorInputObjectSchema),
			z.lazy(() => CourseCreateManyCreatorInputObjectSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const CourseCreateManyCreatorInputEnvelopeObjectSchema = Schema
