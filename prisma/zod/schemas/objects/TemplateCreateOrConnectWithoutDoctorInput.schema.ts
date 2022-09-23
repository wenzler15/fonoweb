import { z } from 'zod'
import { TemplateWhereUniqueInputObjectSchema } from './TemplateWhereUniqueInput.schema'
import { TemplateCreateWithoutDoctorInputObjectSchema } from './TemplateCreateWithoutDoctorInput.schema'
import { TemplateUncheckedCreateWithoutDoctorInputObjectSchema } from './TemplateUncheckedCreateWithoutDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TemplateCreateOrConnectWithoutDoctorInput> = z
	.object({
		where: z.lazy(() => TemplateWhereUniqueInputObjectSchema),
		create: z.any(),
	})
	.strict()

export const TemplateCreateOrConnectWithoutDoctorInputObjectSchema = Schema
