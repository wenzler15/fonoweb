import { z } from 'zod'
import { CourseCreateInputObjectSchema } from './objects/CourseCreateInput.schema'

export const CourseCreateOneSchema = z.object({
	data: CourseCreateInputObjectSchema,
})
