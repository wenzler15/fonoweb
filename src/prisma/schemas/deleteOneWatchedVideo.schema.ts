import { z } from 'zod'
import { WatchedVideoWhereUniqueInputObjectSchema } from './objects/WatchedVideoWhereUniqueInput.schema'

export const WatchedVideoDeleteOneSchema = z.object({
	where: WatchedVideoWhereUniqueInputObjectSchema,
})
