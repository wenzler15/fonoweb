import { z } from 'zod'
import { WatchedVideoWhereUniqueInputObjectSchema } from './WatchedVideoWhereUniqueInput.schema'
import { WatchedVideoUpdateWithoutVideoInputObjectSchema } from './WatchedVideoUpdateWithoutVideoInput.schema'
import { WatchedVideoUncheckedUpdateWithoutVideoInputObjectSchema } from './WatchedVideoUncheckedUpdateWithoutVideoInput.schema'
import { WatchedVideoCreateWithoutVideoInputObjectSchema } from './WatchedVideoCreateWithoutVideoInput.schema'
import { WatchedVideoUncheckedCreateWithoutVideoInputObjectSchema } from './WatchedVideoUncheckedCreateWithoutVideoInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoUpsertWithWhereUniqueWithoutVideoInput> =
	z
		.object({
			where: z.lazy(() => WatchedVideoWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => WatchedVideoUpdateWithoutVideoInputObjectSchema),
				z.lazy(() => WatchedVideoUncheckedUpdateWithoutVideoInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => WatchedVideoCreateWithoutVideoInputObjectSchema),
				z.lazy(() => WatchedVideoUncheckedCreateWithoutVideoInputObjectSchema),
			]),
		})
		.strict()

export const WatchedVideoUpsertWithWhereUniqueWithoutVideoInputObjectSchema =
	Schema
