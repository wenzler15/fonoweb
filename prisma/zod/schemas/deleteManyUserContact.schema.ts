import { z } from 'zod'
import { UserContactWhereInputObjectSchema } from './objects/UserContactWhereInput.schema'

export const UserContactDeleteManySchema = z.object({
	where: UserContactWhereInputObjectSchema.optional(),
})
