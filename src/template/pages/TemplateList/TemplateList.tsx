import { NavBar } from 'components/navBar'
import { ReactElement, useEffect, useMemo, useState, MouseEvent } from 'react'
import { FloatingWhatsAppButton, LoadingOverlay } from 'common/components'
import { useQueryClient } from '@tanstack/react-query'
import { Container } from './TemplateList.styles'
import { useNavigate } from 'react-router-dom'
import {
	useReactTable,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	ColumnDef,
	flexRender,
	PaginationState,
} from '@tanstack/react-table'
import Swal from 'sweetalert2'
import { TemplateType, TemplateWithSpecialty } from 'template/types'
import { useTemplates } from 'template/queries'
import { useUpdateTemplate } from 'template/mutations'
import { Pagination } from 'common/types'
import {
	useTheme,
	Menu,
	Modal,
	Card,
	Fade,
	Backdrop,
	MenuItem,
	Fab,
	Paper,
	Box,
	TableContainer,
	Table as MTable,
	TableCell,
	TableRow,
	TableHead,
	TableBody,
	TableFooter,
	TablePagination,
	Typography,
	IconButton,
	FormControl,
	Stack,
	Select,
	InputLabel,
} from '@mui/material'
import { Add, MoreVert, Close } from '@mui/icons-material'
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions'
import { translateTemplateType } from 'template/utils'
import { useSpecialties } from 'specialty/queries'
import { useVisible } from 'common/hooks'

function Table<Data extends object>({
	data,
	columns,
	count,
	onPaginationChange,
	actions,
	actionsComponent: ActionsComponent,
}: {
	data: Data[]
	columns: ColumnDef<Data>[]
	count: number
	onPaginationChange: (state: Required<Pagination>) => void
	actions?: (data: Data) => ReactElement
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	actionsComponent: ComponentType<any>
}): ReactElement {
	// eslint-disable-next-line react/hook-use-state
	const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 10,
	})

	const pagination = useMemo(
		() => ({
			pageIndex,
			pageSize,
		}),
		[pageIndex, pageSize],
	)

	useEffect(() => {
		if (pagination.pageIndex >= 0) {
			onPaginationChange({
				page: pagination.pageIndex,
				size: pagination.pageSize,
			})
		}
	}, [onPaginationChange, pagination])

	const table = useReactTable({
		data,
		columns,
		// Pipeline
		manualPagination: true,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onPaginationChange: setPagination,
		pageCount: -1,
		state: {
			pagination,
		},
		//
		debugTable: true,
	})

	return (
		<div>
			<TableContainer component={Paper}>
				<MTable>
					<TableHead>
						{table.getHeaderGroups().map(headerGroup => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map(header => (
									<TableCell
										component="th"
										key={header.id}
										colSpan={header.colSpan}
									>
										{header.isPlaceholder ? null : (
											<div>
												{flexRender(
													header.column.columnDef.header,
													header.getContext(),
												)}
											</div>
										)}
									</TableCell>
								))}
								{(actions || ActionsComponent) && (
									<TableCell component="th" style={{ width: '15%' }} />
								)}
							</TableRow>
						))}
					</TableHead>
					<TableBody>
						{table.getRowModel().rows.length === 0 && (
							<TableRow>
								<TableCell
									colSpan={
										columns.length + (actions || ActionsComponent ? 1 : 0)
									}
								>
									<Box p={2}>
										<Typography variant="h6" component="h2" textAlign="center">
											Nenhum modelo foi encontrado
										</Typography>
									</Box>
								</TableCell>
							</TableRow>
						)}
						{table.getRowModel().rows.map(row => (
							<TableRow key={row.id}>
								{row.getVisibleCells().map(cell => (
									<TableCell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
								{actions && (
									<TableCell>
										<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
											{actions(row.original)}
										</Box>
									</TableCell>
								)}
								{ActionsComponent && (
									<TableCell>
										<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
											<ActionsComponent original={row.original} />
										</Box>
									</TableCell>
								)}
							</TableRow>
						))}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TablePagination
								labelRowsPerPage="Linhas por página"
								rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
								colSpan={4}
								count={count}
								rowsPerPage={pagination.pageSize}
								page={pagination.pageIndex}
								SelectProps={{
									inputProps: {
										'aria-label': 'rows per page',
									},
									native: true,
								}}
								onPageChange={(_event, newPage): void => {
									table.setPageIndex(newPage)
								}}
								onRowsPerPageChange={(event): void =>
									table.setPageSize(Number(event.target.value))
								}
								ActionsComponent={TablePaginationActions}
							/>
						</TableRow>
					</TableFooter>
				</MTable>
			</TableContainer>
		</div>
	)
}

function TemplateActionsComponent({
	original: template,
}: {
	original: TemplateWithSpecialty
}) {
	const theme = useTheme()
	const navigate = useNavigate()
	const queryClient = useQueryClient()
	const updateTemplate = useUpdateTemplate({
		onSuccess: () => {
			Swal.fire({
				title: 'Sucesso',
				text: 'Modelo atualizado com sucesso',
				icon: 'success',
				confirmButtonText: 'Ok',
			})
			queryClient.invalidateQueries(['fetchTemplates'])
			queryClient.invalidateQueries(['fetchTemplateDetail', template.id])
		},
		onError: error => {
			console.error(error)
			Swal.fire({
				title: 'Ops!',
				text: 'Não foi possível atualizar o modelo',
				icon: 'warning',
				confirmButtonText: 'Ok',
			})
		},
	})
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
	const modal = useVisible()
	const open = Boolean(anchorEl)
	const handleClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleOpenTemplate = () => {
		modal.show()
		setAnchorEl(null)
	}

	const handleToggleTemplateActivation = () => {
		updateTemplate.mutate({
			id: template.id,
			isActive: !template.isActive,
			specialtyId: template.specialtyId,
		})
		setAnchorEl(null)
	}

	const handleEdit = () => {
		setAnchorEl(null)
		navigate(`/templates/${template.id}`)
	}

	return (
		<>
			<IconButton onClick={handleClick}>
				<MoreVert />
			</IconButton>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem onClick={handleOpenTemplate}>Abrir</MenuItem>
				<MenuItem onClick={handleEdit}>Editar</MenuItem>
				<MenuItem onClick={handleToggleTemplateActivation}>
					{template.isActive ? 'Desativar' : 'Ativar'}
				</MenuItem>
			</Menu>
			<Modal
				open={modal.visible}
				onClose={modal.hide}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={modal.visible}>
					<Card
						sx={{
							position: 'absolute' as const,
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							width: 800,
							boxShadow: 24,
							p: theme.spacing(2),
						}}
					>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								mb: theme.spacing(2),
							}}
						>
							<Typography variant="h5" component="h2">
								Modelo: {template.title}
							</Typography>
							<IconButton onClick={modal.hide}>
								<Close />
							</IconButton>
						</Box>
						<Paper
							elevation={1}
							sx={{
								maxHeight: 800,
								p: theme.spacing(2),
								border: '1px solid #eee',
								overflow: 'auto',
							}}
							dangerouslySetInnerHTML={{ __html: template.html }}
						/>
					</Card>
				</Fade>
			</Modal>
			<LoadingOverlay show={updateTemplate.isLoading} />
		</>
	)
}

export function TemplateList(): ReactElement {
	const [pagination, setPagination] = useState<Required<Pagination>>({
		page: 0,
		size: 10,
	})

	const [specialty, setSpecialty] = useState<string>()
	const [type, setType] = useState<TemplateType>()

	const theme = useTheme()
	const navigate = useNavigate()
	const specialties = useSpecialties({
		page: 1,
		size: 9999,
	})
	const templates = useTemplates({
		...pagination,
		page: pagination.page + 1,
		type,
		specialtyId: specialty,
	})

	const columns = useMemo(
		(): ColumnDef<TemplateWithSpecialty>[] => [
			{
				header: 'Nome',
				accessorKey: 'title',
			},
			{
				header: 'Tipo',
				accessorFn: (template: TemplateWithSpecialty) =>
					translateTemplateType(template.type),
			},
			{
				header: 'Especialidade',
				accessorFn: (template: TemplateWithSpecialty) =>
					template.specialty.name,
			},
			{
				size: 10,
				header: 'Ativo',
				accessorFn: (template: TemplateWithSpecialty): string =>
					template.isActive ? 'Sim' : 'Não',
			},
		],
		[],
	)

	return (
		<Container>
			<NavBar />
			<Box sx={{ p: theme.spacing(4), pb: theme.spacing(9) }}>
				<Typography
					variant="h4"
					component="h1"
					color="secondary"
					sx={{ mb: theme.spacing(4) }}
				>
					Modelos
				</Typography>
				<Paper
					elevation={3}
					sx={{ p: t => t.spacing(2), mb: t => t.spacing(2) }}
				>
					<Typography
						variant="h6"
						component="h1"
						color="secondary"
						sx={{ mb: theme.spacing(2) }}
					>
						Filtros
					</Typography>
					<Stack spacing={2} direction="row">
						<FormControl fullWidth>
							<InputLabel>Especialidade</InputLabel>
							<Select
								label="Especialidade"
								onChange={({ target }) => setSpecialty(target.value)}
							>
								{specialties.data?.result.map(specialty => (
									<MenuItem key={specialty.id} value={specialty.id}>
										{specialty.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<FormControl fullWidth>
							<InputLabel>Tipo</InputLabel>
							<Select
								label="Tipo"
								onChange={({ target }) => setType(target.value)}
							>
								{Object.keys(TemplateType).map(key => (
									<MenuItem key={key} value={key}>
										{translateTemplateType(TemplateType[key as TemplateType])}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Stack>
				</Paper>
				<Table<TemplateWithSpecialty>
					data={templates.data?.result ?? []}
					columns={columns}
					count={templates.data?.total ?? 0}
					onPaginationChange={setPagination}
					actionsComponent={TemplateActionsComponent}
				/>
			</Box>
			<Fab
				onClick={() => navigate('/templates/create')}
				variant="extended"
				size="large"
				color="primary"
				sx={{
					position: 'absolute',
					bottom: theme.spacing(4),
					right: theme.spacing(4),
				}}
			>
				<Add sx={{ mr: 1 }} />
				Novo Modelo
			</Fab>
			<LoadingOverlay show={templates.isLoading} />
      <FloatingWhatsAppButton />
		</Container>
	)
}
