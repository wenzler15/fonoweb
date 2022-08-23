import { useFormState } from "react-hook-form";

import Select from "../../../components/Select";
import TextInput from "../../../components/TextInput";

import { Container } from "./styles";

import { EXPERTISE_LIST } from "../../../constants";

const states = [
  { value: "AC", name: "Acre" },
  { value: "AL", name: "Alagoas" },
  { value: "AP", name: "Amapá" },
  { value: "AM", name: "Amazonas" },
  { value: "BA", name: "Bahia" },
  { value: "CE", name: "Ceará" },
  { value: "DF", name: "Distrito Federal" },
  { value: "ES", name: "Espírito Santo" },
  { value: "GO", name: "Goiás" },
  { value: "MA", name: "Maranhão" },
  { value: "MT", name: "Mato Grosso" },
  { value: "MS", name: "Mato Grosso do Sul" },
  { value: "MG", name: "Minas Gerais" },
  { value: "PA", name: "Pará" },
  { value: "PB", name: "Paraíba" },
  { value: "PR", name: "Paraná" },
  { value: "PE", name: "Pernambuco" },
  { value: "PI", name: "Piauí" },
  { value: "RJ", name: "Rio de Janeiro" },
  { value: "RN", name: "Rio Grande do Norte" },
  { value: "RS", name: "Rio Grande do Sul" },
  { value: "RO", name: "Rondônia" },
  { value: "RR", name: "Roraima" },
  { value: "SC", name: "Santa Catarina" },
  { value: "SP", name: "São Pauo" },
  { value: "SE", name: "Sergipe" },
  { value: "TO", name: "Tocantins" },
];

function DoctorInformation({ register, control, handleNextStep }) {
  const { errors } = useFormState({
    control,
  });

  return (
    <Container>
      <h1>Preencha os dados abaixo </h1>
      <section>
        <TextInput
          register={register}
          name="name"
          title="Nome Completo"
          placeholder="Digite seu nome completo"
          error={errors.name}
        />

        <TextInput
          register={register}
          name="email"
          title="Email"
          placeholder="Digite seu melhor email"
          error={errors.email}
        />
      </section>
      <section>
        <TextInput
          register={register}
          type="password"
          name="password"
          title="Senha"
          placeholder="Digite sua senha"
          error={errors.password}
        />

        <TextInput
          register={register}
          type="password"
          name="confirmPassword"
          title="Confirmar senha"
          placeholder="Confirme sua senha"
          error={errors.confirmPassword}
        />
      </section>
      <section>
        <TextInput
          register={register}
          name="cpf"
          title="CPF"
          placeholder="Digite seu cpf"
          mask="999.999.999-99"
          error={errors.cpf}
        />
        <TextInput
          register={register}
          type="file"
          name="file"
          title="Anexar CRFA ou Comprovante da faculdade"

        />
        <Select
          options={EXPERTISE_LIST}
          register={register}
          placeholder="Escolha sua especialidade"
          name="specialty"
          title="Especialidade"
          error={errors.specialty}
        />
      </section>

      <h2>Endereço</h2>
      <section>
        <TextInput
          register={register}
          name="cep"
          title="CEP"
          mask="99999-999"
          placeholder="00000-000"
          error={errors.cep}
        />
        <TextInput
          register={register}
          name="streetName"
          title="Nome da rua"
          placeholder="Digite seu endereço"
          error={errors.streetName}
        />
      </section>
      <section>
        <TextInput
          register={register}
          name="houseNumber"
          title="Número"
          placeholder="Digite o número da sua casa/apt"
          error={errors.houseNumber}
        />
        <TextInput
          register={register}
          name="complement"
          title="Complemento"
          placeholder=""
          error={errors.complement}
        />
      </section>
      <section>
        <TextInput
          register={register}
          name="district"
          title="Bairro"
          placeholder="Digite seu bairro"
          error={errors.district}
        />
        <TextInput
          register={register}
          name="city"
          title="Cidade"
          placeholder="Digite o nome da sua cidade"
          error={errors.city}
        />

        <Select
          options={states}
          register={register}
          placeholder="Escolha seu estado"
          name="state"
          title="Estado"
          error={errors.state}
        />
      </section>

      <button type="button" onClick={handleNextStep}>
        Avançar
      </button>
    </Container>
  );
}

export default DoctorInformation;
