import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { UserWithPatient } from 'user/types'
import { PaginatedResponse, Pagination } from 'common/types'
import { fetchPatients } from 'patient/requests'

export function usePatients(
	pagination: Pagination,
): UseQueryResult<PaginatedResponse<UserWithPatient>> {
	return useQuery(
		['fetchPatients', pagination],
		() => fetchPatients(pagination),
		{
			keepPreviousData: true,
		},
	)
}
