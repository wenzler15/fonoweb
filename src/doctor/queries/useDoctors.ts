import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { Doctor } from 'doctor/types'
import { PaginatedResponse, Pagination } from 'anamnesis/types'
import { fetchDoctors } from 'doctor/requests'

export function useDoctors(
	pagination: Pagination,
): UseQueryResult<PaginatedResponse<Doctor>> {
	return useQuery(['doctors', pagination], () => fetchDoctors(pagination), {
		keepPreviousData: true,
	})
}
