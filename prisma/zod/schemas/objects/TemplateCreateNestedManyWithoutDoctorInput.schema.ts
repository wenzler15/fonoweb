import { z } from 'zod'
import { TemplateCreateWithoutDoctorInputObjectSchema } from './TemplateCreateWithoutDoctorInput.schema'
import { TemplateUncheckedCreateWithoutDoctorInputObjectSchema } from './TemplateUncheckedCreateWithoutDoctorInput.schema'
import { TemplateCreateOrConnectWithoutDoctorInputObjectSchema } from './TemplateCreateOrConnectWithoutDoctorInput.schema'
import { TemplateCreateManyDoctorInputEnvelopeObjectSchema } from './TemplateCreateManyDoctorInputEnvelope.schema'
import { TemplateWhereUniqueInputObjectSchema } from './TemplateWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.TemplateCreateNestedManyWithoutDoctorInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => TemplateCreateWithoutDoctorInputObjectSchema),
						z.lazy(() => TemplateCreateWithoutDoctorInputObjectSchema).array(),
						z.lazy(() => TemplateUncheckedCreateWithoutDoctorInputObjectSchema),
						z
							.lazy(() => TemplateUncheckedCreateWithoutDoctorInputObjectSchema)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.union([
						z.lazy(() => TemplateCreateOrConnectWithoutDoctorInputObjectSchema),
						z
							.lazy(() => TemplateCreateOrConnectWithoutDoctorInputObjectSchema)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => TemplateCreateManyDoctorInputEnvelopeObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z
					.union([
						z.lazy(() => TemplateWhereUniqueInputObjectSchema),
						z.lazy(() => TemplateWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const TemplateCreateNestedManyWithoutDoctorInputObjectSchema = Schema
