import React, { useEffect, useState } from 'react'

import { NavBar } from '../../components/navBar'

import { Container, DownloadIcon, ArrowIndicatorIcon } from './styles'

import downloadIcon from '../../assets/arrow-down-circle.png'
import arrowIndicatorIcon from '../../assets/arrow-right-purple.png'
import { api } from '../../services'
import { useEvaluations } from '../../evaluation/queries'
import { useNavigate } from 'react-router-dom'

function EvaluationNew() {
	const evaluations = useEvaluations({ page: 1, size: 9999 })
	const navigate = useNavigate()

	return (
		<Container>
			<NavBar />
			<section className="info">
				<div className="info-top">
					<div>
						<h1>Avaliações</h1>
						<a href="/evaluationmodels">
							Buscar modelos de avaliações disponiveis
							<ArrowIndicatorIcon src={arrowIndicatorIcon} />
						</a>
					</div>

					<button type="button">Exportar</button>
				</div>
				{evaluations.data &&
					evaluations.data.result.map(evaluation => (
						<div className="evaluation-model" key={evaluation.assessmentId}>
							<h3>{`Avaliação ${evaluation.numericId}`}</h3>
							<div className="evaluation-model-actions">
								<button className="download">
									<DownloadIcon src={downloadIcon} />
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
		</Container>
	)
}

export default EvaluationNew
