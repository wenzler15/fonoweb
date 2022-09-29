import { z } from 'zod'
import { TemplateTypeSchema } from '../enums/TemplateType.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.EnumTemplateTypeFieldUpdateOperationsInput> = z
	.object({
		set: z.lazy(() => TemplateTypeSchema).optional(),
	})
	.strict()

export const EnumTemplateTypeFieldUpdateOperationsInputObjectSchema = Schema
