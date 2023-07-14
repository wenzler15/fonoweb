import { z } from 'zod'
import { TemplateCreateManyDoctorInputObjectSchema } from './TemplateCreateManyDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TemplateCreateManyDoctorInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => TemplateCreateManyDoctorInputObjectSchema),
			z.lazy(() => TemplateCreateManyDoctorInputObjectSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const TemplateCreateManyDoctorInputEnvelopeObjectSchema = Schema
