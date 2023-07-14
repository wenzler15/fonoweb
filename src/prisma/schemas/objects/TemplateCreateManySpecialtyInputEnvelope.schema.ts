import { z } from 'zod'
import { TemplateCreateManySpecialtyInputObjectSchema } from './TemplateCreateManySpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TemplateCreateManySpecialtyInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => TemplateCreateManySpecialtyInputObjectSchema),
			z.lazy(() => TemplateCreateManySpecialtyInputObjectSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const TemplateCreateManySpecialtyInputEnvelopeObjectSchema = Schema
