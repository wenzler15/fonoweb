import {
	Box,
	Backdrop,
	Paper,
	Card,
	Fade,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Modal,
	Typography,
	IconButton,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material'
import { Close } from '@mui/icons-material'
import { LoadingOverlay } from 'common/components'
import { useTemplates } from 'template/queries'
import { TemplateType, TemplateWithSpecialty } from 'template/types'
import { useSpecialties } from 'specialty/queries'
import { useState } from 'react'

export function TemplateSelector({
	visible,
	type,
	onClose,
	onSelect,
}: {
	visible: boolean
	type: TemplateType
	onClose: () => void
	onSelect: (template: TemplateWithSpecialty) => void
}) {
	const [specialty, setSpecialty] = useState<string>()
	const templates = useTemplates({
		page: 1,
		size: 9999,
		type,
		specialtyId: specialty,
	})
	const specialties = useSpecialties({ page: 1, size: 9999 })

	return (
		<>
			<Modal
				open={visible}
				onClose={onClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={visible}>
					<Card
						sx={{
							position: 'absolute' as const,
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							width: 500,
							boxShadow: 24,
							p: t => t.spacing(2),
						}}
					>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								mb: t => t.spacing(2),
							}}
						>
							<Typography variant="h5" component="h2">
								Selecione um modelo
							</Typography>
							<IconButton onClick={onClose}>
								<Close />
							</IconButton>
						</Box>
						<FormControl fullWidth sx={{ mb: t => t.spacing(2) }}>
							<InputLabel>Especialidade</InputLabel>
							<Select
								label="Especialidade"
								onChange={({ target }) => setSpecialty(target.value as string)}
							>
								{specialties.data?.result.map(s => (
									<MenuItem key={s.id} value={s.id}>
										{s.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<Paper variant="outlined">
							<List>
								{templates.data?.result.map(template => (
									<ListItem disablePadding key={template.id}>
										<ListItemButton onClick={() => onSelect(template)}>
											<ListItemText
												primary={template.title}
												secondary={template.specialty.name}
											/>
										</ListItemButton>
									</ListItem>
								))}
								{templates.data?.result.length === 0 && (
									<ListItem>
										<ListItemText primary="Nenhum modelo encontrado" />
									</ListItem>
								)}
							</List>
						</Paper>
					</Card>
				</Fade>
			</Modal>
			<LoadingOverlay show={templates.isLoading} />
		</>
	)
}
