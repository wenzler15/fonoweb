import { Exercise } from '@prisma/client'
import { client } from 'common/client'
import { Response } from 'common/types'
import { ExerciseCreateInputObjectSchema } from 'prisma/schemas/objects/ExerciseCreateInput.schema'
import { z } from 'zod'

export type CreateExerciseRequestData = z.infer<
  typeof ExerciseCreateInputObjectSchema
>

export function createExercise(
  data: CreateExerciseRequestData,
): Promise<Response<Exercise>> {
  return client('exercises/create', {
    method: 'post',
    json: data,
  }).json()
}
