import { NavBar } from 'components/navBar'
import { ReactElement, useState } from 'react'
import { FloatingWhatsAppButton } from 'common/components'
import { Link, useNavigate } from 'react-router-dom'
import { Pagination } from 'common/types'
import { useTheme } from '@mui/material'
import arrowIndicatorIcon from 'assets/arrow-right-purple.png'
import downloadIcon from 'assets/arrow-down-circle.png'
import {  Container } from './styles'
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
              <Link to='/templates/evaluation/avaliable'>
                Buscar modelos de avaliações disponiveis
                <img src={arrowIndicatorIcon} />
              </Link>
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
