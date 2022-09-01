import { styled } from '@mui/system';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const CollapseButton = styled('button')(({ theme }) => ({
  border: 'none',
  outline: 'none',
  fontSize: '30px',
  color: theme.palette.secondary.main,
  backgroundColor: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'transparent',
  },
}))

export const CustomArrowRight = styled(ArrowRightIcon)`
  height: 46px;
  width: 46px;
  height: 46px;
`

export const CustomArrowDown = styled(ArrowDropDownIcon)`
  height: 46px;
  width: 46px;
  height: 46px;
`


