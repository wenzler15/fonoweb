import { AuthContext } from 'auth/providers'
import { useContext } from 'react'

export const useAuth = () => useContext(AuthContext)
