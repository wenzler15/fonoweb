import { z } from 'zod'
import { WatchedVideoWhereUniqueInputObjectSchema } from './WatchedVideoWhereUniqueInput.schema'
import { WatchedVideoUpdateWithoutUserInputObjectSchema } from './WatchedVideoUpdateWithoutUserInput.schema'
import { WatchedVideoUncheckedUpdateWithoutUserInputObjectSchema } from './WatchedVideoUncheckedUpdateWithoutUserInput.schema'
import { WatchedVideoCreateWithoutUserInputObjectSchema } from './WatchedVideoCreateWithoutUserInput.schema'
import { WatchedVideoUncheckedCreateWithoutUserInputObjectSchema } from './WatchedVideoUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoUpsertWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => WatchedVideoWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => WatchedVideoUpdateWithoutUserInputObjectSchema),
				z.lazy(() => WatchedVideoUncheckedUpdateWithoutUserInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => WatchedVideoCreateWithoutUserInputObjectSchema),
				z.lazy(() => WatchedVideoUncheckedCreateWithoutUserInputObjectSchema),
			]),
		})
		.strict()

export const WatchedVideoUpsertWithWhereUniqueWithoutUserInputObjectSchema =
	Schema
