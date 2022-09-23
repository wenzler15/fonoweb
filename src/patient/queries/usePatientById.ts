import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { UserComplete } from 'user/types'
import { fetchPatientById } from 'patient/requests'

export function usePatientById(id: string): UseQueryResult<UserComplete> {
	return useQuery(['fetchPatients', id], () => fetchPatientById(id), {
		keepPreviousData: true,
		enabled: !!id,
		retry: false,
	})
}
