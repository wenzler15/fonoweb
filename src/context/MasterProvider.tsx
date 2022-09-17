import { PropsWithChildren, ReactElement } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import {
	GlobalStyles,
	ThemeOptions,
	ThemeProvider,
	createTheme,
	PaletteColorOptions,
} from '@mui/material'
import { AuthProvider } from 'auth/providers'
import ptBrLocale from 'date-fns/locale/pt-BR'
import CssBaseline from '@mui/material/CssBaseline'
import { Simplify } from 'type-fest'

declare module '@mui/material' {
	interface TextFieldPropsColorOverrides {
		white: true
		gray: true
	}
	interface FormLabelPropsColorOverrides {
		white: true
		gray: true
	}
	interface InputBasePropsColorOverrides {
		white: true
	}
	interface ButtonPropsColorOverrides {
		gray: true
	}
	interface ButtonPropsSizeOverrides {
		xlarge: true
	}
	interface Palette {
		white: PaletteColorOptions
		gray: PaletteColorOptions
	}
	interface PaletteOptions {
		white: PaletteColorOptions
		gray: PaletteColorOptions
	}
	interface OutlinedInputClasses {
		colorWhite: true
	}
}

export const themeOptions: Simplify<ThemeOptions> = {
	palette: {
		gray: {
			main: '#f5f5f5',
		},
		white: {
			main: '#FFF',
		},
		primary: {
			main: '#1e98d4',
		},
		secondary: {
			main: '#803888',
		},
	},
	components: {
		MuiFormLabel: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					...(ownerState.color !== 'white' && {
						backgroundColor: '#FFF',
					}),
				}),
			},
		},
		MuiInputBase: {
			variants: [
				{
					props: { color: 'white' },
					style: {
						color: '#FFF',
					},
				},
			],
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: '30px',
				},
				colorWhite: {
					'&:hover:not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
						border: '2px solid white',
					},
					'&:not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
						border: '1px solid white',
					},
					'&.Mui-disabled': {
						color: 'rgba(255, 255, 255, 0.38)',
						textFillColor: 'rgba(255, 255, 255, 0.38)',
					},
					'& .Mui-disabled': {
						color: 'rgba(255, 255, 255, 0.38)',
						textFillColor: 'rgba(255, 255, 255, 0.38)',
					},
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					borderRadius: '30px',
				},
			},
			variants: [
				{
					props: { size: 'xlarge' },
					style: {
						fontSize: '1.5rem',
						fontWight: 'bold',
						borderRadius: '40px',
						padding: '0.7rem 3rem',
					},
				},
			],
		},
	},
}

const theme = createTheme(themeOptions)

function MasterProvider({ children }: PropsWithChildren): ReactElement {
	return (
		<LocalizationProvider
			dateAdapter={AdapterDateFns}
			adapterLocale={ptBrLocale}
		>
			<AuthProvider>
				<ThemeProvider theme={theme}>
					<GlobalStyles
						styles={{ body: { backgroundColor: '#e5e5e5 !important' } }}
					/>
					<CssBaseline />
					{children}
				</ThemeProvider>
			</AuthProvider>
		</LocalizationProvider>
	)
}

export { MasterProvider }
