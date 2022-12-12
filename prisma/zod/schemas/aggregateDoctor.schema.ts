import { z } from 'zod'
import { DoctorWhereInputObjectSchema } from './objects/DoctorWhereInput.schema'
import { DoctorOrderByWithRelationInputObjectSchema } from './objects/DoctorOrderByWithRelationInput.schema'
import { DoctorWhereUniqueInputObjectSchema } from './objects/DoctorWhereUniqueInput.schema'
import { DoctorCountAggregateInputObjectSchema } from './objects/DoctorCountAggregateInput.schema'
import { DoctorMinAggregateInputObjectSchema } from './objects/DoctorMinAggregateInput.schema'
import { DoctorMaxAggregateInputObjectSchema } from './objects/DoctorMaxAggregateInput.schema'
import { DoctorAvgAggregateInputObjectSchema } from './objects/DoctorAvgAggregateInput.schema'
import { DoctorSumAggregateInputObjectSchema } from './objects/DoctorSumAggregateInput.schema'

export const DoctorAggregateSchema = z.object({
	where: DoctorWhereInputObjectSchema.optional(),
	orderBy: DoctorOrderByWithRelationInputObjectSchema.optional(),
	cursor: DoctorWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z
		.union([z.literal(true), DoctorCountAggregateInputObjectSchema])
		.optional(),
	_min: DoctorMinAggregateInputObjectSchema.optional(),
	_max: DoctorMaxAggregateInputObjectSchema.optional(),
	_avg: DoctorAvgAggregateInputObjectSchema.optional(),
	_sum: DoctorSumAggregateInputObjectSchema.optional(),
})
