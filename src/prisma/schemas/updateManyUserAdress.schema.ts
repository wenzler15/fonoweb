import { z } from 'zod'
import { UserAdressUpdateManyMutationInputObjectSchema } from './objects/UserAdressUpdateManyMutationInput.schema'
import { UserAdressWhereInputObjectSchema } from './objects/UserAdressWhereInput.schema'

export const UserAdressUpdateManySchema = z.object({
	data: UserAdressUpdateManyMutationInputObjectSchema,
	where: UserAdressWhereInputObjectSchema.optional(),
})
