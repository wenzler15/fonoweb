import { useState, useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";

import { isValid } from "date-fns";
import valid from "card-validator";
import { cpf } from "cpf-cnpj-validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { string, object, ref, boolean } from "yup";

import { NavBar } from "../../components/navBar";
import PaymentMethod from "./PaymentMethod";
import FinishedPayment from "./FinishedPayment";
import DoctorInformation from "./DoctorInformation";

import { Container } from "./styles";
import { DOCTOR } from "../../constants";
import { api } from "../../services";
import Swal from "sweetalert2";
import { FloatingWhatsAppButton } from "../../common/components";

function DoctorRegister() {
  const doctorSchema = object({
    name: string().required("Nome é obrigatório"),
    email: string().email("Email incorreto").required("Email é obrigatório"),
    cpf: string()
      .test("test_cpf", "CPF é invalido", (value) => cpf.isValid(value))
      .required("CPF é obrigatório"),
    specialty: string().required("Você deve escolher uma especialidade"),
    cep: string().required("CEP é obrigatório"),
    password: string().required("Senha obrigatória"),
    confirmPassword: string()
      .required("Confirmação de senha obrigatória")
      .oneOf([ref("password"), null], "Senhas devem ser iguaís"),
    streetName: string().required("Nome da rua obrigatório"),
    houseNumber: string().required("Número da casa é obrigatório"),
    district: string().required("Bairro é obrigatório"),
    city: string().required("Cidade é obrigatório"),
    state: string().required("Você deve escolher um estado"),
    complement: string(),
    method: string(),
    accepted_terms: boolean().test(
      "test_terms",
      "Termos devem ser aceitos",
      (value) => {
        if (step === 1) return true;

        return value === true;
      }
    ),
    paymentMethod: object({
      card_name: string(),
      card_number: string(),
      expiration_date: string(),
      cvv: string(),
    }).when("method", {
      is: (method) => method === "card",
      then: () =>
        object({
          card_name: string().required("Nome no Cartão é obrigatório"),
          card_number: string()
            .test("test_number", "Número do cartão é invalido", (value) => {
              const cardNumber = Number(value.replaceAll("-", ""));

              const cardResponse = valid.number(cardNumber);

              return cardResponse.isValid;
            })
            .required("Número do cartão é obrigatório"),
          expiration_date: string()
            .test(
              "test_expiration_date",
              "Data de expiração é invalida",
              (value) => isValid(new Date(value))
            )
            .required("Data de expiração é obrigatória"),
          cvv: string().required("CVV é obrigatório"),
        }),
    }),
  });

  const {
    register,
    handleSubmit,
    setValue,
    control,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userType: DOCTOR,
      method: "boleto",
    },
    resolver: yupResolver(doctorSchema),
    mode: "all",
    criteriaMode: "all",
  });
  const [step, setStep] = useState(1);

  const handleSubmitRegistration = useCallback(async (formData) => {
    try {
      const response = await api.post("/users", formData);

      if (response.data.message === "User already exists") {
        await Swal.fire({
          icon: "error",
          title: "Usuário já existe, tente um novo email/cpf",
        });
        return;
      }

      setStep(3);
    } catch (err) {
      throw new Error(err);
    }
  }, []);

  const handleNextStep = useCallback(async () => {
    const isValid = await trigger();

    if (isValid) {
      setStep(2);
    }
  }, [trigger]);

  const renderedStep = useMemo(() => {
    switch (step) {
      case 3:
        return <FinishedPayment setStep={setStep} />;
      case 2:
        return (
          <PaymentMethod
            control={control}
            register={register}
            setStep={setStep}
            setValue={setValue}
          />
        );
      default:
        return (
          <DoctorInformation
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
      <FloatingWhatsAppButton />
    </Container>
  );
}

export default DoctorRegister;
