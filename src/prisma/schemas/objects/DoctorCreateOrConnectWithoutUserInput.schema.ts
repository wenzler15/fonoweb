import { z } from 'zod'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'
import { DoctorCreateWithoutUserInputObjectSchema } from './DoctorCreateWithoutUserInput.schema'
import { DoctorUncheckedCreateWithoutUserInputObjectSchema } from './DoctorUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutUserInput> = z
	.object({
		where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => DoctorCreateWithoutUserInputObjectSchema),
			z.lazy(() => DoctorUncheckedCreateWithoutUserInputObjectSchema),
		]),
	})
	.strict()

export const DoctorCreateOrConnectWithoutUserInputObjectSchema = Schema
