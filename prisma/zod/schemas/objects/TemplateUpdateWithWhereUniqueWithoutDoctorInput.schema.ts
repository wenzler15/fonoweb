import { z } from 'zod'
import { TemplateWhereUniqueInputObjectSchema } from './TemplateWhereUniqueInput.schema'
import { TemplateUpdateWithoutDoctorInputObjectSchema } from './TemplateUpdateWithoutDoctorInput.schema'
import { TemplateUncheckedUpdateWithoutDoctorInputObjectSchema } from './TemplateUncheckedUpdateWithoutDoctorInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.TemplateUpdateWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => TemplateWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => TemplateUpdateWithoutDoctorInputObjectSchema),
				z.lazy(() => TemplateUncheckedUpdateWithoutDoctorInputObjectSchema),
			]),
		})
		.strict()

export const TemplateUpdateWithWhereUniqueWithoutDoctorInputObjectSchema =
	Schema
