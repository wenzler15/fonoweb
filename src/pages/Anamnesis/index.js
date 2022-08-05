import React, {useEffect, useMemo, useState} from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

import { EXPERTISE_LIST } from "../../constants";
import NavBar from "../../components/navBar";
import Select from "../../components/Select";

import { Container, ModelContainer } from "./styles";
import api from "../../services";

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

  const handleToggleCreateNewAnamnesis = () => {};

  function mapSpecialty(id){
    return EXPERTISE_LIST.find((specialty) => specialty.value === id).name;
  }

  useEffect(async ()=>{
    const user = JSON.parse(localStorage.getItem('@auth/user'));
    const { data } = await api.get(`/users/doctor/${user.id}/anamnesis`);
    console.log(data);
    setAnamnesis(data)
  }, [])


  return (
    <Container>
      <NavBar />

      <section>
        <span>
          <h1>Anamnese do paciente </h1>

          <button type="button" onClick={handleToggleCreateNewAnamnesis}>
            Criar uma nova Anamnese
          </button>
        </span>

        {anamneses.map((model) => (
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
              <button type="button" className="violet">
                Visualizar
              </button>

              <button type="button" className="red">
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
