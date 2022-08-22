import { Box, Card, CardContent, Typography, useTheme } from '@mui/material'
import { NavBar } from 'components/navBar'
import { ReactElement } from 'react'
import { CreateTemplateDto, CreateTemplateSchema } from 'template/schemas'
import Swal from 'sweetalert2'
import { useCreateTemplate } from 'template/mutations'
import { useNavigate } from 'react-router-dom'
import { TemplateForm } from 'template/components/TemplateForm/TemplateForm'
import { Back } from 'common/components'

export function TemplateCreate(): ReactElement {
	const theme = useTheme()
	const navigate = useNavigate()
	const createTemplate = useCreateTemplate({
		onSuccess: () => {
			navigate('/templates')
			Swal.fire({
				title: 'Success',
				text: 'Modelo criado com sucesso',
				icon: 'success',
			})
		},
	})

	const handleFormSubmit = async (values: CreateTemplateDto) => {
		await createTemplate.mutateAsync(values).catch(console.error)
	}

	return (
		<>
			<NavBar />
			<Box sx={{ p: theme.spacing(4) }}>
				<Typography
					variant="h4"
					component="h1"
					color="secondary"
					sx={{ mb: theme.spacing(2) }}
				>
					Criar modelo
					<Back />
				</Typography>
				<Card>
					<CardContent sx={{ p: theme.spacing(4) }}>
						<TemplateForm<CreateTemplateDto>
							schema={CreateTemplateSchema}
							// eslint-disable-next-line @typescript-eslint/no-misused-promises
							onSubmit={handleFormSubmit}
							initialValues={{
								title: '',
								html: '',
							}}
						/>
					</CardContent>
				</Card>
			</Box>
		</>
	)
}
