import React, {useEffect, useMemo, useState} from "react";
import { useForm } from "react-hook-form";
import {useLocation, useNavigate} from "react-router-dom";

import { EXPERTISE_LIST } from "../../constants";
import { NavBar } from "../../components/navBar";
import Select from "../../components/Select";

import { Container, ModelContainer } from "./styles";
import { api } from "../../services";
import { FloatingWhatsAppButton } from '../../common/components'
const NewAnamnesis = () => {
  return (
    <Container>
      <section>Teste</section>
    </Container>
  );
};

function Anamnesis() {
  const { register, watch } = useForm({});
  const filterSelected = watch("filter");

  const { state } = useLocation();
  const patient = state?.patient;

  const [anamneses, setAnamnesis] = useState([]);

  const navigate = useNavigate();

  function mapSpecialty(id){
    return EXPERTISE_LIST.find((specialty) => specialty.value === id).name;
  }

  useEffect(async ()=>{
    const user = JSON.parse(localStorage.getItem('@auth/user'));
    const { data } = await api.get(`/users/doctor/${user.id}/anamnesis`);
    setAnamnesis(data)
  }, [])


  return (
    <Container>
      <NavBar />

      <section>
        <span>
          <h1>Anamnese do paciente </h1>

          <button type="button" onClick={() => navigate('/anamnesispatientedit', { state: { id: null }})}>
            Criar uma nova Anamnese
          </button>
        </span>

        {anamneses.length > 0 && anamneses.map((model) => (
          <ModelContainer key={model.id}>
            <span>
              <h1>{model.patientName}{model.lastName}</h1>

              <strong>Especialidade: {mapSpecialty(model.specialty)}</strong>
            </span>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <div>
              <button type="button" className="violet" onClick={() => navigate('/anamnesispatient', { state: { id: model.id }})}>
                Visualizar
              </button>

              <button type="button" className="red" onClick={() => navigate('/anamnesispatientedit', { state: { id: model.id }})}>
                Editar
              </button>

              <button type="button" className="blue">
                Usar
              </button>
            </div>
          </ModelContainer>
        ))}
      </section>
      
    </Container>
  );
}

export default Anamnesis;
