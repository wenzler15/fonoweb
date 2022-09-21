import { Exercise as PrismaExercise, Specialty } from '@prisma/client'
import { Merge } from 'type-fest'

export type Exercise = Merge<
	PrismaExercise,
	{
		links: string[]
		specialty: Specialty
	}
>
