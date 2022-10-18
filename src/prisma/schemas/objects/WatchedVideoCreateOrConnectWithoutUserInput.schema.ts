import { z } from 'zod'
import { WatchedVideoWhereUniqueInputObjectSchema } from './WatchedVideoWhereUniqueInput.schema'
import { WatchedVideoCreateWithoutUserInputObjectSchema } from './WatchedVideoCreateWithoutUserInput.schema'
import { WatchedVideoUncheckedCreateWithoutUserInputObjectSchema } from './WatchedVideoUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoCreateOrConnectWithoutUserInput> = z
	.object({
		where: z.lazy(() => WatchedVideoWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => WatchedVideoCreateWithoutUserInputObjectSchema),
			z.lazy(() => WatchedVideoUncheckedCreateWithoutUserInputObjectSchema),
		]),
	})
	.strict()

export const WatchedVideoCreateOrConnectWithoutUserInputObjectSchema = Schema
