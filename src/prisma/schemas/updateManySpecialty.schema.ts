import { z } from 'zod'
import { SpecialtyUpdateManyMutationInputObjectSchema } from './objects/SpecialtyUpdateManyMutationInput.schema'
import { SpecialtyWhereInputObjectSchema } from './objects/SpecialtyWhereInput.schema'

export const SpecialtyUpdateManySchema = z.object({
	data: SpecialtyUpdateManyMutationInputObjectSchema,
	where: SpecialtyWhereInputObjectSchema.optional(),
})
