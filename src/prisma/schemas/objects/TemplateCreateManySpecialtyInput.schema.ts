import { z } from 'zod'
import { TemplateTypeSchema } from '../enums/TemplateType.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TemplateCreateManySpecialtyInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		doctorId: z.string(),
		type: z.lazy(() => TemplateTypeSchema),
		title: z.string(),
		html: z.string(),
		isActive: z.boolean().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
	})
	.strict()

export const TemplateCreateManySpecialtyInputObjectSchema = Schema
