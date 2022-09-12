import { client } from 'common/client'
import { PaginatedResponse } from 'common/types'
import { Evolution } from 'evolution/types'
import { EvolutionFindManySchema } from 'prisma/schemas/findManyEvolution.schema'
import { z } from 'zod'

export const fetchEvolutions = (
	query: z.infer<typeof EvolutionFindManySchema>,
): Promise<PaginatedResponse<Evolution>> =>
	client('evolutions', {
		method: 'post',
		json: query,
	}).json()
