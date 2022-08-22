import { useAuth } from 'auth/hooks/useAuth'
import { PropsWithChildren, ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

function RequireAuth({ children }: PropsWithChildren): ReactElement {
	const { user, token } = useAuth()

	if (user && token) {
		// eslint-disable-next-line react/jsx-no-useless-fragment
		return <>{children}</>
	}

	return <Navigate to="/" replace />
}

export { RequireAuth }
