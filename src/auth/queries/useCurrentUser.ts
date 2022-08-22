import { useQuery } from '@tanstack/react-query'
import { fetchCurrentUser } from 'auth/requests'

export function useCurrentUser() {
	return useQuery(['current-user'], () => fetchCurrentUser(), {
		cacheTime: 0,
	})
}
