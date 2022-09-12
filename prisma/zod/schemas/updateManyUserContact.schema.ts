import { z } from 'zod'
import { UserContactUpdateManyMutationInputObjectSchema } from './objects/UserContactUpdateManyMutationInput.schema'
import { UserContactWhereInputObjectSchema } from './objects/UserContactWhereInput.schema'

export const UserContactUpdateManySchema = z.object({
	data: UserContactUpdateManyMutationInputObjectSchema,
	where: UserContactWhereInputObjectSchema.optional(),
})
