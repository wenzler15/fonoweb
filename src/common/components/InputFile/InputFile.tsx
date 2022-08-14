import { ChangeEvent, ForwardedRef, forwardRef, ReactElement } from 'react'
import { Input, Root } from './InputFile.styles'
import { InputFileProps } from './InputFile.types'

export function BaseInputFile(
	{ onChange, ...props }: InputFileProps,
	ref: ForwardedRef<HTMLInputElement>,
): ReactElement {
	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const files = [...(event.target.files ?? [])]
		onChange(files)
	}

	return (
		<Root>
			<Input ref={ref} type="file" onChange={handleChange} {...props} />
		</Root>
	)
}

export const InputFile = forwardRef<HTMLInputElement, InputFileProps>(
	BaseInputFile,
)
