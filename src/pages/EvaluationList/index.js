import React from "react";

import NavBar from "../../components/navBar";

import { Container, DownloadIcon, ArrowIndicatorIcon } from "./styles";

import downloadIcon from "../../assets/arrow-down-circle.png";
import arrowIndicatorIcon from "../../assets/arrow-right-purple.png";

function EvaluationNew() {
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

        <div className="evaluation-model">
          <h3>Avaliação AB</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <div className="evaluation-model-actions">
            <button className="download">
              <DownloadIcon src={downloadIcon} />
              Baixar
            </button>
            <button className="delete">
              Excluir
            </button>
          </div>
        </div>
        
        <div className="evaluation-model">
          <h3>Avaliação AB</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <div className="evaluation-model-actions">
            <button className="download">
              <DownloadIcon src={downloadIcon} />
              Baixar
            </button>
            <button className="delete">
              Excluir
            </button>
          </div>
        </div>

        <div className="box-action">
          <button>Criar avaliação personalizada</button>
        </div>
      </section>
    </Container>
  );
}

export default EvaluationNew;
