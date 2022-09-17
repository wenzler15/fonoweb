import * as Yup from 'yup'
import { ptForm } from 'yup-locale-pt'

Yup.setLocale(ptForm)

function ensureArray<T>(value: T | T[]): T[] {
	return Array.isArray(value) ? value : [value]
}

declare module 'yup' {
	interface MixedSchema {
		file: (message?: string) => MixedSchema
		fileType: (type: string[] | string, message?: string) => MixedSchema
	}
}

Yup.addMethod(
	// @ts-expect-error - Yup types are wrong
	Yup.mixed,
	'fileType',
	function validFileType(type: string[] | string, message?: string) {
		// eslint-disable-next-line @typescript-eslint/no-invalid-this
		return this.test({
			message:
				message ?? `O arquivo deve ser do tipo ${ensureArray(type).join(', ')}`,
			name: 'valid-file-type',
			params: { type },
			exclusive: true,
			test(value: File) {
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
				return value instanceof File
			},
		})
	},
)

// eslint-disable-next-line unicorn/prefer-export-from
export { Yup }
