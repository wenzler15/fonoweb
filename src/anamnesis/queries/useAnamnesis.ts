import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { PaginatedResponse, Pagination } from 'common/types'
import { fetchAnamnesis } from 'anamnesis/requests'
import { Anamnesis } from 'anamnesis/types'

export function useAnamnesis(
	pagination: Pagination & { specialtyId?: string, patientId?: string },
): UseQueryResult<PaginatedResponse<Anamnesis>> {
	return useQuery(
		['fetchAnamnesis', pagination],
		() => fetchAnamnesis(pagination),
		{
			keepPreviousData: true,
		},
	)
}
