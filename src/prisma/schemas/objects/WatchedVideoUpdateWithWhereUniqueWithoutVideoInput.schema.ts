import { z } from 'zod'
import { WatchedVideoWhereUniqueInputObjectSchema } from './WatchedVideoWhereUniqueInput.schema'
import { WatchedVideoUpdateWithoutVideoInputObjectSchema } from './WatchedVideoUpdateWithoutVideoInput.schema'
import { WatchedVideoUncheckedUpdateWithoutVideoInputObjectSchema } from './WatchedVideoUncheckedUpdateWithoutVideoInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoUpdateWithWhereUniqueWithoutVideoInput> =
	z
		.object({
			where: z.lazy(() => WatchedVideoWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => WatchedVideoUpdateWithoutVideoInputObjectSchema),
				z.lazy(() => WatchedVideoUncheckedUpdateWithoutVideoInputObjectSchema),
			]),
		})
		.strict()

export const WatchedVideoUpdateWithWhereUniqueWithoutVideoInputObjectSchema =
	Schema
