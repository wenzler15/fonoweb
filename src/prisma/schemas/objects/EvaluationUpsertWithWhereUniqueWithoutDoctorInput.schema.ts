import { z } from 'zod'
import { EvaluationWhereUniqueInputObjectSchema } from './EvaluationWhereUniqueInput.schema'
import { EvaluationUpdateWithoutDoctorInputObjectSchema } from './EvaluationUpdateWithoutDoctorInput.schema'
import { EvaluationUncheckedUpdateWithoutDoctorInputObjectSchema } from './EvaluationUncheckedUpdateWithoutDoctorInput.schema'
import { EvaluationCreateWithoutDoctorInputObjectSchema } from './EvaluationCreateWithoutDoctorInput.schema'
import { EvaluationUncheckedCreateWithoutDoctorInputObjectSchema } from './EvaluationUncheckedCreateWithoutDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvaluationUpsertWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => EvaluationWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => EvaluationUpdateWithoutDoctorInputObjectSchema),
				z.lazy(() => EvaluationUncheckedUpdateWithoutDoctorInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => EvaluationCreateWithoutDoctorInputObjectSchema),
				z.lazy(() => EvaluationUncheckedCreateWithoutDoctorInputObjectSchema),
			]),
		})
		.strict()

export const EvaluationUpsertWithWhereUniqueWithoutDoctorInputObjectSchema =
	Schema
