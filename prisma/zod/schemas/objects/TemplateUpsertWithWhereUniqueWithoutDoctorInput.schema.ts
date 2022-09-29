import { z } from 'zod'
import { TemplateWhereUniqueInputObjectSchema } from './TemplateWhereUniqueInput.schema'
import { TemplateUpdateWithoutDoctorInputObjectSchema } from './TemplateUpdateWithoutDoctorInput.schema'
import { TemplateUncheckedUpdateWithoutDoctorInputObjectSchema } from './TemplateUncheckedUpdateWithoutDoctorInput.schema'
import { TemplateCreateWithoutDoctorInputObjectSchema } from './TemplateCreateWithoutDoctorInput.schema'
import { TemplateUncheckedCreateWithoutDoctorInputObjectSchema } from './TemplateUncheckedCreateWithoutDoctorInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.TemplateUpsertWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => TemplateWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => TemplateUpdateWithoutDoctorInputObjectSchema),
				z.lazy(() => TemplateUncheckedUpdateWithoutDoctorInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => TemplateCreateWithoutDoctorInputObjectSchema),
				z.lazy(() => TemplateUncheckedCreateWithoutDoctorInputObjectSchema),
			]),
		})
		.strict()

export const TemplateUpsertWithWhereUniqueWithoutDoctorInputObjectSchema =
	Schema
