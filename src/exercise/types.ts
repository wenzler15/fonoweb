import { Exercise as PrismaExercise } from '@prisma/client'
import { Merge } from 'type-fest'

export type Exercise = Merge<
	PrismaExercise,
	{
		links: string[]
	}
>
