import {
	createContext,
	Dispatch,
	PropsWithChildren,
	ReactElement,
	SetStateAction,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { User, UserType } from 'user/types'

import { api } from '../services'

type AuthFormData = {
	email: string
	password: string
}

export type AuthContextType = {
	user?: User
	setUser: Dispatch<SetStateAction<User | undefined>>
	userType?: UserType
	setUserType: Dispatch<SetStateAction<UserType | undefined>>
	signIn: (form: AuthFormData) => Promise<void>
	signOut: () => Promise<void>
}

// @ts-expect-error it's fine to use the context without starting value
export const AuthContext = createContext<AuthContextType>({})

export function AuthProvider({ children }: PropsWithChildren): ReactElement {
	const [user, setUser] = useState<User>()
	const [userType, setUserType] = useState<UserType>()
	const navigate = useNavigate()

	const signIn = useCallback(
		async (form: AuthFormData) => {
			try {
				const { data } = await api.post('/auth', form)

				if (data.message === 'User or password not found') {
					await Swal.fire({
						icon: 'error',
						title: data.message,
					})

					return
				}

				if (data.user) {
					setUser(data.user as User)

					localStorage.setItem('@auth/user', JSON.stringify(data.user))
					localStorage.setItem('@auth/token', JSON.stringify(data.token))
				}

				navigate('/patients')
			} catch (error) {
				console.error(error)
				await Swal.fire({
					icon: 'error',
					title: 'Não foi possível realizar o login',
				})
			}
		},
		[navigate],
	)

	const signOut = useCallback(async () => {
		setUser(undefined)
		localStorage.removeItem('@auth/user')
		localStorage.removeItem('@auth/token')
	}, [])

	useEffect(() => {
		async function loadUserInStorage(): Promise<void> {
			const foundUser = localStorage.getItem('@auth/user')

			if (foundUser) {
				const parsedUser = JSON.parse(foundUser)
				setUser(parsedUser as User)
			}
		}

		loadUserInStorage().catch(console.error)
	}, [])

	return (
		<AuthContext.Provider
			value={useMemo(
				() => ({
					user,
					setUser,
					userType,
					setUserType,
					signIn,
					signOut,
				}),
				[signIn, signOut, user, userType],
			)}
		>
			{children}
		</AuthContext.Provider>
	)
}
