import { NavBar } from 'components/navBar'
import { ReactElement, useMemo, useState } from 'react'
import { FloatingWhatsAppButton, LoadingOverlay, Table } from 'common/components'
import { useNavigate } from 'react-router-dom'
import { ColumnDef } from '@tanstack/react-table'
import { usePatients } from 'patient/queries'
import { Pagination } from 'common/types'
import { useTheme, Fab, Box, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'
import { UserWithPatient } from 'user/types'
import { PatientListActions } from 'patient/pages/PatientList/PatientListActions'
import arrowIndicatorIcon from 'assets/arrow-right-purple.png'
import downloadIcon from 'assets/arrow-down-circle.png'
import {  DownloadIcon, ArrowIndicatorIcon, Container } from './styles'
import { fetchEvaluations } from 'evaluation/requests'
import { useEvaluations } from 'evaluation/queries'

export function EvaluationList(): ReactElement {
	const [pagination, setPagination] = useState<Required<Pagination>>({
		page: 0,
		size: 10,
	})

	const theme = useTheme()
	const navigate = useNavigate()
	const evaluations = useEvaluations({ ...pagination, page: pagination.page + 1 })


	return (
		<>
			<Container>
        <NavBar />
        <section className="info">
          <div className="info-top">
            <div>
              <h1>Avaliações</h1>
              <span>Avaliações personalizadas</span>
              <a href="/evaluationmodels">
                Buscar modelos de avaliações disponiveis
                <img src={arrowIndicatorIcon} />
              </a>
            </div>

            <button type="button">Exportar</button>
          </div>
          {evaluations.data &&
            evaluations.data.result.map((evaluation) => (
              <div className="evaluation-model" key={evaluation.id}>
                <h3>{`Avaliação ${evaluation.specialty.name}`}</h3>
                <span>{evaluation.patient.user.name}</span>
                <div className="evaluation-model-actions">
                  <button className="download">
                    <img src={downloadIcon} />
                    Baixar
                  </button>
                  <button className="delete">Excluir</button>
                </div>
              </div>
            ))}

          <div className="box-action">
            <button onClick={() => navigate('/evaluations/create')}>
              Criar avaliação personalizada
            </button>
          </div>
        </section>
        <FloatingWhatsAppButton />
      </Container>
		</>
	)
}
