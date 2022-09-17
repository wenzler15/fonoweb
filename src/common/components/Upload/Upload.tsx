import { ChangeEvent, useState } from 'react'
import { Typography } from '@mui/material'
import { UploadProps } from './Upload.types'
import { Label, Root } from './Upload.styles'
import { DescriptionOutlined } from '@mui/icons-material'

export function Upload({
	label,
	name,
	multiple,
	onChange,
	onBlur,
	value,
	error = false,
	help,
}: UploadProps) {
	const [fileName, setFileName] = useState<string>(() =>
		Array.isArray(value)
			? value.map(file => file.name).join(', ')
			: value?.name ?? label,
	)

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFileName(
			[...(event.target.files ?? [])].map(file => file.name).join(', '),
		)

		if (multiple) {
			return onChange([...(event.target.files ?? [])] as File[])
		}

		return onChange(event.target.files?.[0])
	}

	return (
		<Root>
			<Label error={error} htmlFor={name}>
				<DescriptionOutlined sx={{ mr: t => t.spacing(1) }} />
				<Typography color="inherit">{fileName}</Typography>
				<input
					type="file"
					id={name}
					name={name}
					multiple={multiple}
					onBlur={onBlur}
					onChange={handleInputChange}
					style={{
						opacity: 0,
						position: 'absolute',
						zIndex: -1,
					}}
				/>
			</Label>
			{help && help.length > 0 && (
				<Typography variant="caption" color="error">
					{help}
				</Typography>
			)}
		</Root>
	)
}
