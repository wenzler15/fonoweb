import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { PaginatedResponse, Pagination } from 'common/types'
import { fetchSpecialties } from 'specialty/requests'
import { Specialty } from 'specialty/types'

export function useSpecialties(
	pagination: Pagination,
): UseQueryResult<PaginatedResponse<Specialty>> {
	return useQuery(
		['fetchSpecialties', pagination],
		() => fetchSpecialties(pagination),
		{
			keepPreviousData: true,
		},
	)
}
