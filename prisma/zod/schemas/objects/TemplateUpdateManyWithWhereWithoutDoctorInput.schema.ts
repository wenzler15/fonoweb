import { z } from 'zod'
import { TemplateScalarWhereInputObjectSchema } from './TemplateScalarWhereInput.schema'
import { TemplateUpdateManyMutationInputObjectSchema } from './TemplateUpdateManyMutationInput.schema'
import { TemplateUncheckedUpdateManyWithoutTemplatesInputObjectSchema } from './TemplateUncheckedUpdateManyWithoutTemplatesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TemplateUpdateManyWithWhereWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => TemplateScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => TemplateUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => TemplateUncheckedUpdateManyWithoutTemplatesInputObjectSchema,
				),
			]),
		})
		.strict()

export const TemplateUpdateManyWithWhereWithoutDoctorInputObjectSchema = Schema
