import { z } from 'zod'
import { WatchedVideoWhereUniqueInputObjectSchema } from './WatchedVideoWhereUniqueInput.schema'
import { WatchedVideoCreateWithoutVideoInputObjectSchema } from './WatchedVideoCreateWithoutVideoInput.schema'
import { WatchedVideoUncheckedCreateWithoutVideoInputObjectSchema } from './WatchedVideoUncheckedCreateWithoutVideoInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoCreateOrConnectWithoutVideoInput> = z
	.object({
		where: z.lazy(() => WatchedVideoWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => WatchedVideoCreateWithoutVideoInputObjectSchema),
			z.lazy(() => WatchedVideoUncheckedCreateWithoutVideoInputObjectSchema),
		]),
	})
	.strict()

export const WatchedVideoCreateOrConnectWithoutVideoInputObjectSchema = Schema
