import { useState, useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import DoctorInformationRegister from "./DoctorInformationRegister";
import PaymentRegister from "./PaymentRegister";
import NavBar from "../../components/navBar";

import { Container } from "./styles";

const doctorSchema = Yup.object({
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email("Email incorreto").required("Email é obrigatório"),
  cpf: Yup.string().required("CPF é obrigatório"),
  cep: Yup.string().required("CEP é obrigatório"),
  password: Yup.string().required("Senha obrigatória"),
  confirmPassword: Yup.string()
    .required("Confirmação de senha obrigatória")
    .oneOf([Yup.ref("password"), null], "Senhas devem ser iguaís"),
  streetName: Yup.string().required("Nome da rua obrigatório"),
  houseNumber: Yup.string().required("Número da casa é obrigatório"),
  district: Yup.string().required("Bairro é obrigatório"),
  city: Yup.string().required("Cidade é obrigatório"),
  state: Yup.string().required("Você deve escolher um estado"),
  complement: Yup.string(),
  method: Yup.string(),
  paymentMethod: Yup.object({
    // card_name: Yup.string().when("method", {
    //   is: "card",
    //   then: Yup.string().required(),
    // }),
    // card_number: Yup.string().when("method", {
    //   is: "card",
    //   then: Yup.string().required(),
    // }),
    // expiration_date: Yup.string().when("method", {
    //   is: "card",
    //   then: Yup.string().required(),
    // }),
    // cvv: Yup.string().when("method", {
    //   is: "card",
    //   then: Yup.string().required(),
    // }),
  }),
});

function DoctorRegister() {
  const { register, handleSubmit, setValue, control, trigger } = useForm({
    defaultValues: {
      method: "boleto",
    },
    resolver: yupResolver(doctorSchema),
    mode: "all",
    criteriaMode: "all",
  });
  const [step, setStep] = useState(1);

  const handleSubmitRegistration = useCallback((formData) => {
    console.log(formData);
  }, []);

  const handleNextStep = useCallback(async () => {
    const isValid = await trigger();

    // if (isValid) {
    setStep(2);
    // }
  }, [trigger]);

  const renderedStep = useMemo(() => {
    switch (step) {
      case 2:
        return (
          <PaymentRegister
            control={control}
            register={register}
            setStep={setStep}
            setValue={setValue}
          />
        );
      default:
        return (
          <DoctorInformationRegister
            control={control}
            register={register}
            handleNextStep={handleNextStep}
          />
        );
    }
  }, [step, register, control, setValue, handleNextStep]);

  return (
    <Container>
      <NavBar />

      <form onSubmit={handleSubmit(handleSubmitRegistration)}>
        {renderedStep}
      </form>
    </Container>
  );
}

export default DoctorRegister;
