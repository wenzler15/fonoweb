import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { PaginatedResponse, Pagination } from 'common/types'
import { fetchDoctors } from 'doctor/requests'
import { UserWithDoctor } from 'user/types'

export function useDoctors(
	pagination: Pagination,
): UseQueryResult<PaginatedResponse<UserWithDoctor>> {
	return useQuery(
		['fetchDoctors', pagination],
		() => fetchDoctors(pagination),
		{
			keepPreviousData: true,
		},
	)
}
