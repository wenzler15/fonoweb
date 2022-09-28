import { Exercise as PrismaExercise, Specialty } from '@prisma/client'
import { Merge } from 'type-fest'
import { UserComplete } from 'user/types'

export type Exercise = Merge<
	PrismaExercise,
	{
		links: string[]
		specialty: Specialty
		creator: UserComplete
	}
>
