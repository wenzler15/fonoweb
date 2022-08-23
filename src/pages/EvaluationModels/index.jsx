import React from "react";
import { FloatingWhatsAppButton } from "../../common/components";

import { NavBar } from "../../components/navBar";

import { Container } from "./styles";

function EvaluationModels() {
  return (
    <Container>
      <NavBar />
      <section className="info">
        <div className="info-top">
          <div>
            <h1>Modelos de Avaliações Disponíveis</h1>
          </div>
          <button type="button">Exportar</button>
        </div>

        <div className="evaluation-model-available">
          <div>
            <h3>Avaliação AB</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
          <div className="evaluation-model-available-actions">
            <button className="view">Visualizar</button>
            <button className="use">Usar</button>
          </div>
        </div>

        <div className="evaluation-model-available">
          <div>
            <h3>Avaliação AB</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
          <div className="evaluation-model-available-actions">
            <button className="view">Visualizar</button>
            <button className="use">Usar</button>
          </div>
        </div>

        <div className="box-action">
          <button>Criar avaliação personalizada</button>
        </div>
      </section>
      <FloatingWhatsAppButton />
    </Container>
  );
}

export default EvaluationModels;
