import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

import { EXPERTISE_LIST } from "../../constants";
import NavBar from "../../components/navBar";
import Select from "../../components/Select";

import { Container, ModelContainer } from "./styles";

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

  const handleToggleCreateNewAnamnesis = () => {};

  const modelsList = useMemo(() => {
    if (filterSelected > 0) {
      return [];
    }

    return [{}, {}];
  }, [filterSelected]);

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

        {modelsList.map((model) => (
          <ModelContainer>
            <span>
              <h1>Modelo predefinido 1</h1>

              <strong>Especialidade: X</strong>
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
