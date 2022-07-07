import { useFormState, useWatch } from "react-hook-form";
import { Link } from "react-router-dom";

import TextInput from "../../../components/TextInput";

import {
  Container,
  PaymentMethodSelector,
  AddPaymentContainer,
} from "./styles";

function PaymentRegister({ register, control, setValue, setStep }) {
  const { errors } = useFormState({
    control,
  });

  const method = useWatch({
    control,
    name: "method",
  });

  return (
    <Container>
      <h1>Escolha metodo de pagamento</h1>

      <section>
        <div>
          <PaymentMethodSelector
            type="button"
            isSelected={method === "boleto"}
            onClick={() => setValue("method", "boleto")}
          >
            Boleto Bancario
          </PaymentMethodSelector>

          <PaymentMethodSelector
            type="button"
            isSelected={method === "card"}
            onClick={() => setValue("method", "card")}
          >
            Adicionar cartão
          </PaymentMethodSelector>

          {method === "card" && (
            <AddPaymentContainer>
              <TextInput
                name="paymentMethod.card_name"
                title="Nome no cartão"
                placeholder="Digite o nome impresso no seu cartão"
                register={register}
              />
              <TextInput
                name="paymentMethod.card_number"
                title="Número do cartão"
                placeholder="Digite o número do seu cartão"
                mask="9999-9999-9999-9999"
                register={register}
              />

              <div className="row">
                <TextInput
                  name="paymentMethod.expiration_date"
                  title="Data de expiração"
                  placeholder="Digite a data de expiração do seu cartão"
                  mask="99/99"
                  register={register}
                />

                <TextInput
                  name="paymentMethod.cvv"
                  title="CVV"
                  placeholder="CVV"
                  mask="999"
                  register={register}
                />
              </div>
            </AddPaymentContainer>
          )}
        </div>

        <div>
          <strong>Assinatura premium gold</strong>

          <p>Nome do Profissional</p>
          <p>CPF: 00000000000</p>
          <p>Rua Endereço, Bairro Cidade - DF</p>

          <button className="editButton" type="button">
            Editar
          </button>

          <span>
            Plano Mensal
            <h3>R$ 129,00</h3>
          </span>

          <span>
            <input type="checkbox" {...register("accepted_terms")} />
            <h4>
              Aceita os termos de cobrança recorrente.{" "}
              <Link to="/terms">Clique aqui</Link> para ler mais
            </h4>
          </span>
        </div>
      </section>

      <div className="buttonContainer">
        <button type="button" className="goBack" onClick={() => setStep(1)}>
          Voltar
        </button>

        <button type="submit">Assinar</button>
      </div>
    </Container>
  );
}

export default PaymentRegister;
