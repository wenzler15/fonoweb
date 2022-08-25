import { ButtonBase, Link } from '@mui/material';
import { styled } from '@mui/system';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const CustomButton = styled(ButtonBase)(({ theme }) => ({
  textDecoration: 'none',
  fontSize: '22px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.secondary.main,
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'transparent',
  },
}))

export const CustomArrowRight = styled(ArrowRightIcon)`
  height: 44px;
  width: 44px;
  height: 44px;
`

export const CustomArrowDown = styled(ArrowDropDownIcon)`
  height: 44px;
  width: 44px;
  height: 44px;
`

export const Container = styled('div')`
  background: #e5e5e5;
  padding-bottom: 4rem;
`;
