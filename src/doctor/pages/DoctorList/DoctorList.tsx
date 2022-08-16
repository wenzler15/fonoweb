import { NavBar } from 'components/navBar'
import { ReactElement, useEffect, useMemo, useState } from 'react'
import { Container, Content } from './DoctorList.styles'
import {
	useReactTable,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	ColumnDef,
	flexRender,
	OnChangeFn,
	PaginationState,
} from '@tanstack/react-table'
import { Doctor } from 'doctor/types'
import { useDoctors } from 'doctor/queries'
import { Pagination } from 'anamnesis/types'
import {
	Paper,
	TableContainer,
	Table as MTable,
	TableCell,
	TableRow,
	TableHead,
	TableBody,
	TableFooter,
	TablePagination,
	Button,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions'
import { useActivateDoctor } from 'doctor/mutations'
// import TableHead from '@mui/material/TableHead'

function Table<Data extends object>({
	data,
	columns,
	count,
	onPaginationChange,
	actions,
}: {
	data: Data[]
	columns: ColumnDef<Data>[]
	count: number
	onPaginationChange: (state: Required<Pagination>) => void
	actions?: (data: Data) => ReactElement
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
								{actions && (
									<TableCell component="th" style={{ width: '15%' }} />
								)}
							</TableRow>
						))}
					</TableHead>
					<TableBody>
						{table.getRowModel().rows.map(row => (
							<TableRow key={row.id}>
								{row.getVisibleCells().map(cell => (
									<TableCell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
								{actions && <TableCell>{actions(row.original)}</TableCell>}
							</TableRow>
						))}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TablePagination
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
								// @ts-expect-error aaa
								ActionsComponent={TablePaginationActions}
							/>
						</TableRow>
					</TableFooter>
				</MTable>
			</TableContainer>
		</div>
	)
}

export function DoctorList(): ReactElement {
	const [pagination, setPagination] = useState<Required<Pagination>>({
		page: 0,
		size: 10,
	})
	const [userBeingActvated, setUserBeingActvated] = useState<number>()
	const doctors = useDoctors({ ...pagination, page: pagination.page + 1 })
	const activateDoctor = useActivateDoctor({
		onMutate(doctorId: number) {
			setUserBeingActvated(doctorId)
		},
		onSettled() {
			setUserBeingActvated(undefined)
		},
	})

	const columns = useMemo(
		(): ColumnDef<Doctor>[] => [
			{
				header: 'Nome',
				accessorKey: 'name',
			},
			{
				header: 'Email',
				accessorKey: 'email',
			},
			{
				header: 'Ativo',
				accessorFn: (doctor: Doctor): string =>
					doctor.isActive ? 'Sim' : 'Não',
			},
		],
		[],
	)

	return (
		<Container>
			<NavBar />
			<Content>
				<Table
					data={doctors.data?.data.result ?? []}
					columns={columns}
					count={doctors.data?.data.total ?? 0}
					onPaginationChange={setPagination}
					// eslint-disable-next-line react/no-unstable-nested-components
					actions={(doctor: Doctor): ReactElement => (
						<LoadingButton
							variant="contained"
							color="primary"
							size="small"
							loading={userBeingActvated === doctor.id}
							loadingIndicator="Enviando..."
							disabled={doctor.isActive}
							onClick={(): void => {
								activateDoctor.mutateAsync(doctor.id).catch(console.error)
							}}
						>
							{!doctor.isActive ? 'Ativar Médico' : 'Médico Ativo'}
						</LoadingButton>
					)}
				/>
			</Content>
		</Container>
	)
}
