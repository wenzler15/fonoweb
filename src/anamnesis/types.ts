import { AxiosError, AxiosResponse } from 'axios'

export type Response<T> = AxiosResponse<{
	result: T
}>

export type Pagination = {
	size?: number
	page: number
}

export type PaginatedResponse<T> = AxiosResponse<{
	result: T[]
	total: number
	page: number
	size: number
	pages: number
}>

export type ErrorResponse = AxiosError<{
	error?: string
	message: string
	errorCode: number
}>
