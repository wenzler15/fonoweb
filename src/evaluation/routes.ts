import { EvaluationCreate } from 'evaluation/pages'

export const EVALUATION_ROUTES = [
	{
		auth: true,
		path: '/evaluations/create',
		element: EvaluationCreate,
	},
]
