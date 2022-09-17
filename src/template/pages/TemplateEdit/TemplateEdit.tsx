import { Box, Card, CardContent, Typography, useTheme } from '@mui/material'
import { NavBar } from 'components/navBar'
import { ReactElement } from 'react'
import { UpdateTemplateDto, UpdateTemplateSchema } from 'template/schemas'
import { Container } from './TemplateEdit.styles'
import Swal from 'sweetalert2'
import { useUpdateTemplate } from 'template/mutations'
import { useNavigate, useParams } from 'react-router-dom'
import { TemplateForm } from 'template/components/TemplateForm/TemplateForm'
import { useTemplateDetail } from 'template/queries'
import { Back, FloatingWhatsAppButton, LoadingOverlay } from 'common/components'
import { useQueryClient } from '@tanstack/react-query'

export function TemplateEdit(): ReactElement {
	const theme = useTheme()
	const navigate = useNavigate()
	const params = useParams()
	const templateDetail = useTemplateDetail(params.id as string)
	const queryClient = useQueryClient()
	const createTemplate = useUpdateTemplate({
		onSuccess: () => {
			navigate('/templates')
			Swal.fire({
				title: 'Success',
				text: 'Template atualizado com sucesso',
				icon: 'success',
			})
			queryClient.invalidateQueries(['fetchTemplates'])
			queryClient.invalidateQueries(['fetchTemplateDetail', params.id])
		},
	})

	const handleFormSubmit = async ({
		specialty,
		...values
	}: Partial<UpdateTemplateDto>) => {
		await createTemplate
			.mutateAsync({
				...values,
				specialtyId: specialty?.id as string,
				id: params.id as string,
			})
			.catch(console.error)
	}

	return (
		<Container>
			
			<Box sx={{ p: theme.spacing(4) }}>
				<Typography
					variant="h4"
					component="h1"
					color="secondary"
					sx={{ mb: theme.spacing(2) }}
				>
					Editar modelo
					<Back />
				</Typography>
				<Card>
					<CardContent sx={{ p: theme.spacing(4) }}>
						{templateDetail.data && (
							<TemplateForm<Partial<UpdateTemplateDto>>
								schema={UpdateTemplateSchema}
								// eslint-disable-next-line @typescript-eslint/no-misused-promises
								onSubmit={handleFormSubmit}
								initialValues={{
									title: templateDetail.data.result.title,
									html: templateDetail.data.result.html,
									type: templateDetail.data.result.type,
									specialty: templateDetail.data.result.specialty,
								}}
							/>
						)}
					</CardContent>
				</Card>
			</Box>
			<LoadingOverlay show={templateDetail.isLoading} />
      
		</Container>
	)
}
