import { FormikInputProps } from 'common/types'
import { Upload } from './Upload'
import { useField } from 'formik'

export function UploadFormik({
	label,
	...props
}: FormikInputProps<{ multiple: boolean }>) {
	const [field, meta, helpers] = useField(props.name)

	return (
		<Upload
			{...field}
			{...props}
			label={label}
			onChange={(value: unknown) => helpers.setValue(value, true)}
			error={meta.touched && !!meta.error}
			help={meta.error}
		/>
	)
}
