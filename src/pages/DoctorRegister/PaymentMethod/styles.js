import styled from "styled-components";

export const Container = styled.div`
  section {
    display: flex;
    justify-content: space-between;
    font-family: "Lato";

    > div {
      display: flex;
      flex-flow: column;
      width: 45%;

      > strong {
        color: #fff;
        background: #803888;
        padding: 1rem;
        border-radius: 4px;

        text-align: center;
      }

      > p {
        color: #1e3354;
        font-size: 1.15rem;

        margin-top: 0.75rem;
        margin-bottom: 0;
      }

      .inLineButton {
        padding: 0;
        margin: 0;

        text-align: start;

        width: auto;
        background: transparent;
        color: #1e98d4;
        font-weight: 700;
      }

      > span {
        display: flex;
        align-items: center;
        margin-top: 2rem;

        > h3 {
          margin-left: auto;
          font-weight: 700;
        }
      }

      > input {
        padding: 1rem;
        border-radius: 50%;
      }

      > h4 {
        margin: 0;
        margin-left: 1rem;
        font-size: 0.95rem;
      }
    }
  }

  .buttonContainer {
    display: flex;
    justify-content: space-between;
  }
`;

export const PaymentMethodSelector = styled.button`
  display: flex;
  align-items: center;
  width: 100% !important;

  padding: 1rem !important;
  border-radius: 4px !important;

  background: rgba(0, 0, 0, 0.05) !important;
  color: #000 !important;
  margin-top: 1rem !important;

  &::before {
    content: "";
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;
    border-radius: 50%;
    border: ${({ isSelected }) =>
      isSelected ? `8px solid #1e98d4` : `0.2px solid #888`};
  }
`;

export const AddPaymentContainer = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.05);
  padding: 1rem;
  margin-top: 1rem;

  div {
    margin-top: 1rem;

    > label {
      font-size: 1rem;
    }

    > div {
      strong {
        font-size: 1rem;
        padding: 0;
      }
    }
  }

  .uppercase {
    text-transform: uppercase;
  }

  .row {
    display: flex;

    > div {
      width: 70%;

      & + div {
        width: 30%;
      }
    }
  }
`;

export const TermsContainer = styled.div`
  margin: 2rem;

  > span {
    display: flex;
    align-items: center;

    > button {
      display: flex;
      justify-content: center;
      align-items: center;

      margin: 0;

      height: 48px !important;
      width: 48px !important;
      border-radius: 50% !important;
      margin-right: 1rem !important;
    }

    > h1 {
      margin: 0;
    }
  }

  > p {
    font-family: "Lato";
    font-size: 1rem;

    color: #1e3354;
    margin-top: 1rem;
  }
`;
