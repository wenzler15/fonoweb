import { z } from 'zod'
import { DoctorPatientWhereInputObjectSchema } from './objects/DoctorPatientWhereInput.schema'
import { DoctorPatientOrderByWithRelationInputObjectSchema } from './objects/DoctorPatientOrderByWithRelationInput.schema'
import { DoctorPatientWhereUniqueInputObjectSchema } from './objects/DoctorPatientWhereUniqueInput.schema'
import { DoctorPatientCountAggregateInputObjectSchema } from './objects/DoctorPatientCountAggregateInput.schema'
import { DoctorPatientMinAggregateInputObjectSchema } from './objects/DoctorPatientMinAggregateInput.schema'
import { DoctorPatientMaxAggregateInputObjectSchema } from './objects/DoctorPatientMaxAggregateInput.schema'
import { DoctorPatientAvgAggregateInputObjectSchema } from './objects/DoctorPatientAvgAggregateInput.schema'
import { DoctorPatientSumAggregateInputObjectSchema } from './objects/DoctorPatientSumAggregateInput.schema'

export const DoctorPatientAggregateSchema = z.object({
	where: DoctorPatientWhereInputObjectSchema.optional(),
	orderBy: DoctorPatientOrderByWithRelationInputObjectSchema.optional(),
	cursor: DoctorPatientWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z
		.union([z.literal(true), DoctorPatientCountAggregateInputObjectSchema])
		.optional(),
	_min: DoctorPatientMinAggregateInputObjectSchema.optional(),
	_max: DoctorPatientMaxAggregateInputObjectSchema.optional(),
	_avg: DoctorPatientAvgAggregateInputObjectSchema.optional(),
	_sum: DoctorPatientSumAggregateInputObjectSchema.optional(),
})
