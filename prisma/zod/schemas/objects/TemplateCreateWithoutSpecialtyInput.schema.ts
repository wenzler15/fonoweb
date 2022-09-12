import { z } from 'zod'
import { TemplateTypeSchema } from '../enums/TemplateType.schema'
import { DoctorCreateNestedOneWithoutTemplatesInputObjectSchema } from './DoctorCreateNestedOneWithoutTemplatesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TemplateCreateWithoutSpecialtyInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		type: z.lazy(() => TemplateTypeSchema),
		title: z.string(),
		html: z.string(),
		isActive: z.boolean().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		doctor: z.lazy(
			() => DoctorCreateNestedOneWithoutTemplatesInputObjectSchema,
		),
	})
	.strict()

export const TemplateCreateWithoutSpecialtyInputObjectSchema = Schema
