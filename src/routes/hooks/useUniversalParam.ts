import { useParams, useSearchParams } from 'react-router-dom'

export function useUniversalParam(key: string) {
	const params = useParams()
	const [searchParams] = useSearchParams()

	return params[key] ?? searchParams.get(key)
}
