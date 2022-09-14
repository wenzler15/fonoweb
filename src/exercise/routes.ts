import { ExerciseCreate, ExerciseList, ExerciseUpdate } from 'exercise/pages'

export const EXERCISE_ROUTES = [
	{
		auth: true,
		path: '/exercises',
		element: ExerciseList,
	},
	{
		auth: true,
		path: '/exercises/create',
		element: ExerciseCreate,
	},
	{
		auth: true,
		path: '/exercises/:exercise',
		element: ExerciseUpdate,
	},
]
