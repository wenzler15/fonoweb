import { z } from 'zod'
import { SpecialtyWhereUniqueInputObjectSchema } from './objects/SpecialtyWhereUniqueInput.schema'

export const SpecialtyDeleteOneSchema = z.object({
	where: SpecialtyWhereUniqueInputObjectSchema,
})
