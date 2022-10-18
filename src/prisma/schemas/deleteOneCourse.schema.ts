import { z } from 'zod'
import { CourseWhereUniqueInputObjectSchema } from './objects/CourseWhereUniqueInput.schema'

export const CourseDeleteOneSchema = z.object({
	where: CourseWhereUniqueInputObjectSchema,
})
