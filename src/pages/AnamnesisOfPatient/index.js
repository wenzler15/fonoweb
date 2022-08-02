import React, { useEffect, useState } from "react";

import NavBar from "../../components/navBar";

import { Container } from "./styles";

function AnamnesisOfPatient() {
  return (
    <Container>
      <NavBar />

      <section className="info">
        <div className="info-top">
          <div>
            <h1>Anamnese do paciente</h1>
            <h2>Escreva livremente abaixo. Se preferir,<br /> importre modelos favoritos. </h2>
          </div>

          <button type="button">Editar</button>
        </div>

        <div className="info-questions">
          <div className="info-questions-item">
            <h3>Objetivo da consulta</h3>
            <p>R: Resposta 1</p>
            <p>R: Resposta 2</p>
          </div>
          <div className="info-questions-item">
            <h3>Histórico patológico do paciente</h3>
            <p>R: Resposta Livre</p>
          </div>
          <div className="info-questions-item">
            <h3>Histórico familiar</h3>
            <p>R:</p>
          </div>
        </div>

        <div className="box-action">
          <button>Usar</button>
        </div>
      </section>
    </Container>
  );
}

export default AnamnesisOfPatient;
