import { z } from 'zod'
import { TemplateTypeSchema } from '../enums/TemplateType.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TemplateUncheckedCreateWithoutDoctorInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		type: z.lazy(() => TemplateTypeSchema),
		specialtyId: z.string(),
		title: z.string(),
		html: z.string(),
		isActive: z.boolean().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
	})
	.strict()

export const TemplateUncheckedCreateWithoutDoctorInputObjectSchema = Schema
