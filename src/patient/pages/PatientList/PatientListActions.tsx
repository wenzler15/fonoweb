import { MoreVert } from '@mui/icons-material'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { useState, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserWithPatient } from 'user/types'

export function PatientListActions({
	original: patient,
}: {
	original: UserWithPatient
}) {
	const navigate = useNavigate()
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<>
			<IconButton onClick={handleClick} size="small">
				<MoreVert />
			</IconButton>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem
					onClick={() => navigate(`/anamnesis/create?patient=${patient.id}`)}
				>
					Nova Anamnese
				</MenuItem>
				<MenuItem
					onClick={() => navigate(`/evaluations/create?patient=${patient.id}`)}
				>
					Nova Avaliação
				</MenuItem>
			</Menu>
		</>
	)
}
