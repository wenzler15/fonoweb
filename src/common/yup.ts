import * as Yup from 'yup'
import { Schema } from 'yup'
import { ptForm } from 'yup-locale-pt'
import mime from 'mime-types'
import { isNil } from 'rambda'

Yup.setLocale(ptForm)

function ensureArray<T>(value: T | T[]): T[] {
	return Array.isArray(value) ? value : [value]
}

type Flags = '' | 'd' | 's'

declare module 'yup' {
	interface StringSchema {
		hasToExist: (message?: string) => StringSchema<string>
	}
	interface ArraySchema<
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		TIn extends any[] | null | undefined,
		TContext,
		TDefault = undefined,
		TFlags extends Flags = '',
	> extends Schema<TIn, TContext, TDefault, TFlags> {
		hasToExist: (message?: string) => ArraySchema<NonNullable<TIn>, TContext>
	}

	interface MixedSchema<
		TType = unknown,
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-qualifier
		TContext = Yup.AnyObject,
		TDefault = undefined,
		TFlags extends Flags = '',
	> extends Schema<TType, TContext, TDefault, TFlags> {
		file: (
			message?: string,
		) => MixedSchema<File | undefined, TContext, TDefault, TFlags>
		fileType: (
			type: string[] | string,
			message?: string,
		) => MixedSchema<File | undefined, TContext, TDefault, TFlags>
		hasToExist: (
			message?: string,
		) => MixedSchema<NonNullable<TType>, TContext, TDefault, TFlags>
	}
}

Yup.addMethod(
	// @ts-expect-error - Yup types are wrong
	Schema,
	'hasToExist',
	// eslint-disable-next-line prefer-arrow-callback
	function hasToExist(message?: string) {
		/* eslint-disable-next-line @typescript-eslint/no-invalid-this, @typescript-eslint/no-this-alias, unicorn/no-this-assignment */
		const that = this

		if (that.type === 'string') {
			;(that as unknown as Yup.StringSchema).trim(message)
		}

		return that.defined(message).required(message).nullable(false, message)
	},
)

Yup.addMethod(
	// @ts-expect-error - Yup types are wrong
	Yup.mixed,
	'fileType',
	function validFileType(type: string[] | string, message?: string) {
		// eslint-disable-next-line @typescript-eslint/no-invalid-this
		return this.test({
			message:
				message ??
				`O arquivo deve ser do tipo ${ensureArray(type)
					.map(m => mime.extension(m))
					.join(', ')}`,
			name: 'valid-file-type',
			params: { type },
			exclusive: true,
			test(value: File | undefined) {
				if (isNil(value)) return true
				const resolvedType = this.resolve(type)
				const types = ensureArray(resolvedType)
				return types.includes(value.type)
			},
		})
	},
)
Yup.addMethod(
	// @ts-expect-error - Yup types are wrong
	Yup.mixed,
	'file',
	function file(message = 'Este campo precisa ser um arquivo') {
		// eslint-disable-next-line @typescript-eslint/no-invalid-this
		return this.test({
			message,
			name: 'is-file',
			exclusive: true,
			test(value: File | undefined) {
				if (isNil(value)) return true
				return value instanceof File
			},
		})
	},
)

// eslint-disable-next-line unicorn/prefer-export-from
export { Yup }
