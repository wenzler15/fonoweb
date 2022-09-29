import { z } from 'zod'
import { TemplateWhereInputObjectSchema } from './TemplateWhereInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.TemplateListRelationFilter> = z
	.object({
		every: z.lazy(() => TemplateWhereInputObjectSchema).optional(),
		some: z.lazy(() => TemplateWhereInputObjectSchema).optional(),
		none: z.lazy(() => TemplateWhereInputObjectSchema).optional(),
	})
	.strict()

export const TemplateListRelationFilterObjectSchema = Schema
