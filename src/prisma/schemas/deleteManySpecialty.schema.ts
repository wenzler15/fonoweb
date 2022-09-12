import { z } from 'zod'
import { SpecialtyWhereInputObjectSchema } from './objects/SpecialtyWhereInput.schema'

export const SpecialtyDeleteManySchema = z.object({
	where: SpecialtyWhereInputObjectSchema.optional(),
})
