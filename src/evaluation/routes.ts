import { EvaluationCreate, EvaluationList } from 'evaluation/pages'

export const EVALUATION_ROUTES = [
  {
		auth: true,
		path: '/evaluations',
		element: EvaluationList,
	},
	{
		auth: true,
		path: '/evaluations/create',
		element: EvaluationCreate,
	},
]
