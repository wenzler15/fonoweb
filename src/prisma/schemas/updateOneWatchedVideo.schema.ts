import { z } from 'zod'
import { WatchedVideoUpdateInputObjectSchema } from './objects/WatchedVideoUpdateInput.schema'
import { WatchedVideoWhereUniqueInputObjectSchema } from './objects/WatchedVideoWhereUniqueInput.schema'

export const WatchedVideoUpdateOneSchema = z.object({
	data: WatchedVideoUpdateInputObjectSchema,
	where: WatchedVideoWhereUniqueInputObjectSchema,
})
