import {
	ReactElement,
	useEffect,
	useMemo,
	useState,
	ComponentType,
} from 'react'
import {
	useReactTable,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	ColumnDef,
	flexRender,
	PaginationState,
} from '@tanstack/react-table'
import { Pagination } from 'common/types'
import {
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
} from '@mui/material'
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions'

export function Table<Data extends object>({
	data,
	columns,
	count,
	onPaginationChange,
	initialPageSize = 10,
	actions,
	texts,
	actionsComponent: ActionsComponent,
}: {
	texts: { empty: string }
	data: Data[]
	initialPageSize?: number
	columns: ColumnDef<Data>[]
	count: number
	onPaginationChange: (state: Required<Pagination>) => void
	actions?: (data: Data) => ReactElement
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	actionsComponent?: ComponentType<any>
}): ReactElement {
	// eslint-disable-next-line react/hook-use-state
	const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: initialPageSize,
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
		columnResizeMode: 'onChange',
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
										style={{ width: header.getSize() }}
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
									<TableCell component="th" style={{ maxWidth: '10%' }} />
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
											{texts.empty}
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
