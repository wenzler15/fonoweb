import { AuthContext, AuthContextType } from 'context'
import { useContext } from 'react'

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext)

	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	if (!context) {
		throw new Error('Context must be within provider')
	}

	return context
}
