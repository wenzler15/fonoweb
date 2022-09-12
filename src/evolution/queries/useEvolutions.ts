import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { fetchEvolutions } from 'evolution/requests'
import { Evolution } from 'evolution/types'
import { EvolutionFindManySchema } from 'prisma/schemas/findManyEvolution.schema'
import { z } from 'zod'

export function useEvolutions(
	query: z.infer<typeof EvolutionFindManySchema>,
): UseQueryResult<{ count: number; result: Evolution[] }> {
	return useQuery(['fetchEvolutions', query], () => fetchEvolutions(query), {
		keepPreviousData: true,
	})
}
