import { NavBar } from 'components/navBar'
import { ReactElement, useState } from 'react'
import { FloatingWhatsAppButton } from 'common/components'
import { useNavigate, Link } from 'react-router-dom'
import { Pagination } from 'common/types'
import arrowIndicatorIcon from 'assets/arrow-right-purple.png'
import downloadIcon from 'assets/arrow-down-circle.png'
import { Container } from './styles'
import { useAnamnesis } from 'anamnesis/queries'

export function AnamnesisList(): ReactElement {
	const [pagination, setPagination] = useState<Required<Pagination>>({
		page: 0,
		size: 9999,
	})

	const navigate = useNavigate()
	const anamnesis = useAnamnesis({ ...pagination, page: pagination.page + 1 })

	return (
		<Container>
			<NavBar />
			<section className="info">
				<div className="info-top">
					<div>
						<h1>Anamneses</h1>
						<Link to="/templates/anamnesis/avaliable">
							Buscar modelos de anamneses disponiveis
							<img src={arrowIndicatorIcon} alt="arrow" />
						</Link>
					</div>

					<button type="button">Exportar</button>
				</div>
				{anamnesis.data?.result.map(a => (
					<div className="anamnesis-model" key={a.id}>
						<h3>{`Avaliação ${a.doctor.specialty.name}`}</h3>
						<span>{a.doctor.name}</span>
						<div className="anamnesis-model-actions">
							<button type="button" className="download">
								<img src={downloadIcon} alt="download" />
								Baixar
							</button>
							<button type="button" className="delete">
								Excluir
							</button>
						</div>
					</div>
				))}

				<div className="box-action">
					<button type="button" onClick={() => navigate('/anamnesis/create')}>
						Criar uma nova Anamnese
					</button>
				</div>
			</section>
			<FloatingWhatsAppButton />
		</Container>
	)
}
