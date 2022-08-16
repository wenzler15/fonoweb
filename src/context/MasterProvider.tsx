import { PropsWithChildren, ReactElement } from 'react'
import { AuthProvider } from './AuthProvider'

function MasterProvider({ children }: PropsWithChildren): ReactElement {
	return <AuthProvider>{children}</AuthProvider>
}

export { MasterProvider }
