import { NavBar } from 'components/navBar'
import { ReactElement, useState } from 'react'
import { FloatingWhatsAppButton} from 'common/components'
import { useNavigate } from 'react-router-dom'
import { Pagination } from 'common/types'
import arrowIndicatorIcon from 'assets/arrow-right-purple.png'
import downloadIcon from 'assets/arrow-down-circle.png'
import { Container } from './styles'
import { useAnamnesis } from 'anamnesis/queries'
import { Link } from "react-router-dom";

export function AnamnesisList(): ReactElement {
	const [pagination, setPagination] = useState<Required<Pagination>>({
		page: 0,
		size: 10,
	})

	const navigate = useNavigate()
	const anamnesis = useAnamnesis({ ...pagination, page: pagination.page + 1 })

	return (
		<>
			<Container>
        <NavBar />
        <section className="info">
          <div className="info-top">
            <div>
              <h1>Anamnesis</h1>
              <Link to='/templates/anamnesis/avaliable'>
                Buscar modelos de avaliações disponiveis
                <img src={arrowIndicatorIcon} />
              </Link>
            </div>

            <button type="button">Exportar</button>
          </div>
          {anamnesis.data &&
            anamnesis.data.result.map((anamnesis) => (
              <div className="anamnesis-model" key={anamnesis.id}>
                <h3>{`Avaliação ${anamnesis.doctor.specialty.name}`}</h3>
                <span>{anamnesis.doctor.name}</span>
                <div className="anamnesis-model-actions">
                  <button className="download">
                    <img src={downloadIcon} />
                    Baixar
                  </button>
                  <button className="delete">Excluir</button>
                </div>
              </div>
            ))}

          <div className="box-action">
            <button onClick={() => navigate('/anamnesis/create')}>
              Criar uma nova Anamnese
            </button>
          </div>
        </section>
        <FloatingWhatsAppButton />
      </Container>
		</>
	)
}
