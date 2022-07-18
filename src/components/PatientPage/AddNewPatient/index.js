import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextInput from "../../TextInput";
import Select from "../../Select";

import { Container } from "./styles";
import { object, string } from "yup";
import { isValid } from "date-fns";

const genderOptions = [
  {
    name: "Feminino",
    value: 1,
  },
  {
    name: "Masculino",
    value: 2,
  },
];

const patientSchema = object({
  full_name: string().required("Nome completo é obrigatório"),
  gender: string().required("Escolha 1 gênero"),
  birthDate: string()
    .test("test_expiration_date", "Data de nascimento é invalida", (value) => {
      const dataSplitted = value.split("/");
      const formattedData = new Date(
        dataSplitted[1],
        dataSplitted[0],
        dataSplitted[2]
      );

      return isValid(formattedData);
    })
    .required("Data de nascimento é obrigatória"),
  email: string().email("Email é invalido").required("Email é obrigatório"),
});

function AddNewPatient({ toggleNewPatient }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(patientSchema),
  });

  const handleSubmitForm = useCallback(
    (formData) => {
      toggleNewPatient();
    },
    [toggleNewPatient]
  );

  return (
    <Container onSubmit={handleSubmit(handleSubmitForm)}>
      <section>
        <TextInput
          name="full_name"
          register={register}
          title="Nome completo"
          placeholder="Nome completo"
          error={errors.full_name}
        />

        <Select
          name="gender"
          register={register}
          title="Gênero do paciente"
          options={genderOptions}
          placeholder="Escolha seu gênero (Biológico)"
          error={errors.gender}
        />
      </section>

      <section>
        <TextInput
          name="birthDate"
          register={register}
          title="Data de nascimento"
          placeholder="Digite sua de nascimento"
          mask="99/99/9999"
          error={errors.birthDate}
        />
        <TextInput
          name="email"
          register={register}
          title="Email de contato"
          placeholder="Digite seu email de contato"
          error={errors.email}
        />
      </section>

      <button type="submit">Cadastrar paciente</button>
    </Container>
  );
}

export default AddNewPatient;
