import { styled } from '@mui/material';
import { Select, TextField } from 'formik-mui';
import InputMask from 'react-input-mask';

export const TextFieldWrapper = styled(TextField)`
  fieldset {
    border-radius: 0;
  }
`;

export const TextFieldMaskWrapper = styled(InputMask)`
  fieldset {
    border-radius: 0;
  }
`;

export const SelectWrapper = styled(Select)`
  fieldset {
    border-radius: 0;
  }
`;

export const Label = styled('label')(({ theme }) => ({
  fontSize: '26px',
  marginRight: theme.spacing(2),
}))


export const LabelInfo = styled('label', {
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'myProp',
})(({ color, theme }) => ({
  color: color === 'error' ? theme.palette.error.main : 'grey',
  fontSize: '12px',
}))
