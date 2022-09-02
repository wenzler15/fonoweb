import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { UserWithPatient } from 'user/types'
import { fetchPatientById } from 'patient/requests'

export function usePatientById(
	id: string,
): UseQueryResult<UserWithPatient> {
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
