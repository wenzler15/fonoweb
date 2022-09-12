import { EvolutionCreate, EvolutionList } from 'evolution/pages'

export const EVOLUTION_ROUTES = [
  {
		auth: true,
		path: '/evolutions',
		element: EvolutionList,
	},
	{
		auth: true,
		path: '/evolutions/create',
		element: EvolutionCreate,
	},
]
