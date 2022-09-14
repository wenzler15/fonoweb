import { z } from 'zod'
import { ExerciseCreateInputObjectSchema } from './objects/ExerciseCreateInput.schema'

export const ExerciseCreateOneSchema = z.object({
	data: ExerciseCreateInputObjectSchema,
})
