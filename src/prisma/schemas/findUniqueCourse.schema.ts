import { z } from 'zod'
import { CourseWhereUniqueInputObjectSchema } from './objects/CourseWhereUniqueInput.schema'

export const CourseFindUniqueSchema = z.object({
	where: CourseWhereUniqueInputObjectSchema,
})
