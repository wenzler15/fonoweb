import { z } from 'zod'
import { UserContactWhereUniqueInputObjectSchema } from './objects/UserContactWhereUniqueInput.schema'

export const UserContactFindUniqueSchema = z.object({
	where: UserContactWhereUniqueInputObjectSchema,
})
