import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { UserWithPatient } from 'user/types'
import { PaginatedResponse } from 'common/types'
import { fetchPatientById } from 'patient/requests'

export function usePatientById(
	id: string,
): UseQueryResult<PaginatedResponse<UserWithPatient>> {
	return useQuery(
		['fetchPatients', id],
		() => fetchPatientById(id),
		{
			keepPreviousData: true,
      enabled: !!id,
      retry: false
		},
	)
}
