import { z } from 'zod'
import { WatchedVideoWhereUniqueInputObjectSchema } from './WatchedVideoWhereUniqueInput.schema'
import { WatchedVideoUpdateWithoutUserInputObjectSchema } from './WatchedVideoUpdateWithoutUserInput.schema'
import { WatchedVideoUncheckedUpdateWithoutUserInputObjectSchema } from './WatchedVideoUncheckedUpdateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoUpdateWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => WatchedVideoWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => WatchedVideoUpdateWithoutUserInputObjectSchema),
				z.lazy(() => WatchedVideoUncheckedUpdateWithoutUserInputObjectSchema),
			]),
		})
		.strict()

export const WatchedVideoUpdateWithWhereUniqueWithoutUserInputObjectSchema =
	Schema
