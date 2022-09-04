import { Yup } from 'common/yup'
import { FieldInputProps, FormikContextType } from 'formik'
import { Merge, Simplify } from 'type-fest'

// eslint-disable-next-line @typescript-eslint/ban-types
export type FormikInputProps<T extends object = {}> = Simplify<
	Merge<
		T,
		{
			name: string
			label: string
		}
	>
>

export type Response<T> = {
	result: T
	message?: string[] | string
	error?: string
	statusCode?: number
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type FormProps<T extends object, Extra extends object = {}> = Merge<
	{
		onSubmit: (data: T) => void
		initialValues: T
		schema?: Yup.SchemaOf<T>
	},
	Extra
>

export type Form<T extends object> = {
	onSubmit: (data: T) => void
}

export type PaginatedResponse<T> = Simplify<
	Merge<
		Response<T>,
		{
			result: T[]
			total: number
			page: number
			size: number
			pages: number
		}
	>
>

export type Pagination = {
	size?: number
	page: number
}

export type WithCuid<T> = Merge<T, { cuid: string }>
