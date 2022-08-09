import React, { useEffect, useState } from "react";

import NavBar from "../../components/navBar";

import { Container } from "./styles";
import {useLocation} from "react-router-dom";
import api from "../../services";

function AnamnesisOfPatient() {
  const { state } = useLocation();
  const [anamnese, setAnamnese] = useState({});
  useEffect(async () => {
    const {data} = await api.get(`/anamnesis/${state.id}`)
    setAnamnese(data)
  }, [])
  return (
    <Container>
      <NavBar />

      <section className="info">
        <div className="info-top">
          <div>
            <h1>Anamnese do paciente</h1>
            <h2>Escreva livremente abaixo. Se preferir,<br /> importe modelos favoritos. </h2>
          </div>

          <button type="button">Editar</button>
        </div>
        {anamnese.anamnesis.map(item => (
          <div className="info-questions">
            <div className="info-questions-item">
              <h3>{item.pergunta}</h3>
              {item.respostas.map(item => (
                <p>item</p>
              ))}
            </div>
          </div>
        ))}
        <div className="box-action">
          <button>Usar</button>
        </div>
      </section>
    </Container>
  );
}

export default AnamnesisOfPatient;
