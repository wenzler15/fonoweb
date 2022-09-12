import { z } from 'zod'
import { UserAdressWhereInputObjectSchema } from './objects/UserAdressWhereInput.schema'

export const UserAdressDeleteManySchema = z.object({
	where: UserAdressWhereInputObjectSchema.optional(),
})
