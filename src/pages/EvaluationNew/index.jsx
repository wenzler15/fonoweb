import React, {useState} from "react";

import { NavBar } from "../../components/navBar";

import { Container } from "./styles";
import {useLocation} from "react-router-dom";
import { api } from "../../services";
import { FloatingWhatsAppButton } from "../../common/components";

function EvaluationModels() {
  const { state } = useLocation();
  const [text, setText] = useState("");

  const changeText = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = async () => {
    const user = JSON.parse(localStorage.getItem('@auth/user'))
    await api.post('/assessments', {
      professionalId: user.id,
      userId: state.patient.id,
      description: text,
    })
  }

  return (
    <Container>
      <NavBar />
      <section className="info">
        <div className="info-top">
          <h1>Nova avaliação</h1>
        </div>
        <form>
          <textarea type="text" placeholder="Adicione uma nova avaliação..." onChange={changeText}></textarea>
          <button type="submit" onClick={handleSubmit}>Salvar</button>
        </form>
      </section>
      
    </Container>
  );
}

export default EvaluationModels;
