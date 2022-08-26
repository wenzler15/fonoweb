import { createContext, PropsWithChildren, ReactElement } from 'react'
import create from 'zustand'
import createVanilla from 'zustand/vanilla'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'
import { User } from 'user/types'

// @ts-expect-error context don't need initial state
export const AuthContext = createContext<AuthStoreState>({})

export type AuthStoreState = {
	user?: User
	token?: string
	setUser: (user: User) => void
	setToken: (token: string) => void
	logout: () => void
}

export const AuthStore = createVanilla<
	AuthStoreState,
	[['zustand/persist', AuthStoreState], ['zustand/immer', never]]
>(
	persist(
		immer(set => ({
			user: undefined,
			token: undefined,
			logout: () =>
				set(state => {
					state.user = undefined
					state.token = undefined
				}),
			setToken: (token: string) =>
				set(state => {
					state.token = token
				}),
			setUser: (user: User) =>
				set(state => {
					state.user = user
				}),
		})),
		{
			name: '@fonoweb/auth',
		},
	),
)

const useAuthStore = create(AuthStore)

export function AuthProvider({ children }: PropsWithChildren): ReactElement {
	const store = useAuthStore()

	return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>
}
