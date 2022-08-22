import { UploadFile } from '@mui/icons-material'
import { Button } from '@mui/material'
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
			<Button
				variant="contained"
				component="label"
				size="large"
				color="secondary"
				startIcon={<UploadFile />}
			>
				ENVIAR PDF
				<input
					ref={ref}
					hidden
					accept="image/*"
					multiple
					type="file"
					onChange={handleChange}
					{...props}
				/>
			</Button>
		</Root>
	)
}

export const InputFile = forwardRef<HTMLInputElement, InputFileProps>(
	BaseInputFile,
)
