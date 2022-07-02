import { useCallback } from "react";
import { useForm } from "react-hook-form";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import NavBar from "../../components/navBar";
import TextInput from "../../components/TextInput";

import { Container } from "./styles";
import Select from "../../components/Select";
import { useState } from "react";

const doctorSchema = Yup.object({
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email("Email incorreto").required("Email é obrigatório"),
  cpf: Yup.string().max(11).required("CPF é obrigatório"),
  cep: Yup.string().max(8).required("CEP é obrigatório"),
  password: Yup.string().required("Senha obrigatória"),
  confirmPassword: Yup.string()
    .required("Confirmação de senha obrigatória")
    .oneOf([Yup.ref("password"), null], "Senhas devem ser iguaís"),
  streetName: Yup.string().required("Nome da rua obrigatório"),
  houseNumber: Yup.string().max(8).required("Número da casa é obrigatório"),
  complement: Yup.string(),
  district: Yup.string().required("Bairro é obrigatório"),
  city: Yup.string().required("Cidade é obrigatório"),
  state: Yup.string().required("Você deve escolher um estado"),
});

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

function DoctorRegister() {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(doctorSchema),
  });

  const handleSubmitRegistration = useCallback((formData) => {
    console.log(formData);
  }, []);

  const handleNextStep = useCallback(async () => {
    // const isValid = await trigger();

    // if (isValid) {

    setStep(2);
    // }
  }, []);

  return (
    <Container>
      <NavBar />

      <form onSubmit={handleSubmit(handleSubmitRegistration)}>
        {step === 2 ? (
          <>
            <h1>Escolha metodo de pagamento</h1>
          </>
        ) : (
          step === 1 && (
            <>
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
                  name="cpf"
                  title="CPF"
                  maxLength={11}
                  placeholder="Digite seu cpf"
                  error={errors.cpf}
                />
                <TextInput
                  register={register}
                  type="file"
                  name="file"
                  title="Anexar CRFA ou Comprovante da faculdade"
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

              <h2>Endereço</h2>
              <section>
                <TextInput
                  register={register}
                  name="cep"
                  title="CEP"
                  maxLength={8}
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
                  title="Número da casa"
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
            </>
          )
        )}
      </form>
    </Container>
  );
}

export default DoctorRegister;
