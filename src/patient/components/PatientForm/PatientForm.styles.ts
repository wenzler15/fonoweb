import { styled } from '@mui/material'
import { Select, TextField } from 'formik-mui'
import InputMask from 'react-input-mask'

export const TextFieldWrapper = styled(TextField)``

export const TextFieldMaskWrapper = styled(InputMask)``

export const SelectWrapper = styled(Select)``

export const Label = styled('label')(({ theme }) => ({
	fontSize: '1.5rem',
	marginRight: theme.spacing(2),
	marginBottom: theme.spacing(1),
	display: 'inline-block',
}))

export const LabelInfo = styled('label', {
	shouldForwardProp: prop => prop !== 'color' && prop !== 'myProp',
})(({ color, theme }) => ({
	color: color === 'error' ? theme.palette.error.main : 'grey',
	fontSize: '12px',
}))
