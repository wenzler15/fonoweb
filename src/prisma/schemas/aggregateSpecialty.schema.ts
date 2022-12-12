import { z } from 'zod'
import { SpecialtyWhereInputObjectSchema } from './objects/SpecialtyWhereInput.schema'
import { SpecialtyOrderByWithRelationInputObjectSchema } from './objects/SpecialtyOrderByWithRelationInput.schema'
import { SpecialtyWhereUniqueInputObjectSchema } from './objects/SpecialtyWhereUniqueInput.schema'
import { SpecialtyCountAggregateInputObjectSchema } from './objects/SpecialtyCountAggregateInput.schema'
import { SpecialtyMinAggregateInputObjectSchema } from './objects/SpecialtyMinAggregateInput.schema'
import { SpecialtyMaxAggregateInputObjectSchema } from './objects/SpecialtyMaxAggregateInput.schema'
import { SpecialtyAvgAggregateInputObjectSchema } from './objects/SpecialtyAvgAggregateInput.schema'
import { SpecialtySumAggregateInputObjectSchema } from './objects/SpecialtySumAggregateInput.schema'

export const SpecialtyAggregateSchema = z.object({
	where: SpecialtyWhereInputObjectSchema.optional(),
	orderBy: SpecialtyOrderByWithRelationInputObjectSchema.optional(),
	cursor: SpecialtyWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z
		.union([z.literal(true), SpecialtyCountAggregateInputObjectSchema])
		.optional(),
	_min: SpecialtyMinAggregateInputObjectSchema.optional(),
	_max: SpecialtyMaxAggregateInputObjectSchema.optional(),
	_avg: SpecialtyAvgAggregateInputObjectSchema.optional(),
	_sum: SpecialtySumAggregateInputObjectSchema.optional(),
})
