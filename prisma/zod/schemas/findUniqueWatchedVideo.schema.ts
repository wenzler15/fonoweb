import { z } from 'zod'
import { WatchedVideoWhereUniqueInputObjectSchema } from './objects/WatchedVideoWhereUniqueInput.schema'

export const WatchedVideoFindUniqueSchema = z.object({
	where: WatchedVideoWhereUniqueInputObjectSchema,
})
