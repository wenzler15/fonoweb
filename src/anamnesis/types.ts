import { AxiosError, AxiosResponse } from 'axios'

export type Response<T> = AxiosResponse<{
	result: T
}>

export type ErrorResponse = AxiosError<{
	error?: string
	message: string
	errorCode: number
}>
