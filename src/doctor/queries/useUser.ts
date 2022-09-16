import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { fetchUser } from 'doctor/requests'
import { UserWithDoctor } from 'user/types'

export function useCurrentUser(): UseQueryResult<UserWithDoctor> {
	return useQuery(
		['fetchCurrentUser'],
		() => fetchUser(),
		{
			keepPreviousData: true,
		},
	)
}
