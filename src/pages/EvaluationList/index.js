import React, {useEffect, useState} from "react";

import NavBar from "../../components/navBar";

import { Container, DownloadIcon, ArrowIndicatorIcon } from "./styles";

import downloadIcon from "../../assets/arrow-down-circle.png";
import arrowIndicatorIcon from "../../assets/arrow-right-purple.png";
import api from "../../services";

function EvaluationNew() {
  const [ evaluations, setEvaluations ] = useState([]);

  const getEvaluations = async () => {
    const user = JSON.parse(localStorage.getItem("@auth/user"));
    const { data } = await api.get(`/users/doctor/${user.id}/assessments`);
    setEvaluations(data);
  }

  const deleteEvaluation = async (id) => {
    await api.delete(`/assessments/${id}`);
  }

  useEffect( () => {
    getEvaluations()
  } ,[])
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
        {evaluations && evaluations.map(evaluation =>
          (
            <div className="evaluation-model" key={evaluation.assessmentId}>
              <h3>{evaluation.title || "Avaliação sem título"}</h3>
              <p>{evaluation.description}</p>
              <div className="evaluation-model-actions">
                <button className="download">
                  <DownloadIcon src={downloadIcon} />
                  Baixar
                </button>
                <button className="delete" onClick={() => deleteEvaluation(evaluation.assessmentId)}>
                  Excluir
                </button>
              </div>
            </div>
          ))
        }

        <div className="box-action">
          <button>Criar avaliação personalizada</button>
        </div>
      </section>
    </Container>
  );
}

export default EvaluationNew;
