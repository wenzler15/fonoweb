import {
	Course as PCourse,
	Lesson as PLesson,
	LessonVideo as PLessonVideo,
	WatchedVideo,
} from '@prisma/client'
import { Merge } from 'type-fest'
import { UserComplete } from 'user/types'

export type Course = Merge<
	PCourse,
	{
		lessons: Lesson[]
		creator: UserComplete
	}
>

export type Lesson = Merge<
	PLesson,
	{
		finished?: boolean
		creator: UserComplete
		videos: LessonVideo[]
	}
>

export type LessonVideo = Merge<PLessonVideo, { watched: WatchedVideo[] }>
