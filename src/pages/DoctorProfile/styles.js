import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;

  > form {
    > div {
      display: flex;
      flex-direction: column;

      margin-top: 2rem;

      .titleContainer {
        display: flex;
        justify-content: space-between;

        > h1 {
          font-family: "Poppins";
          font-size: 1.75rem;

          > b {
            font-size: 1rem;
            color: #aaa;
          }
        }

        > button {
          border: 0;
          font-family: "Poppins";

          padding: 1rem;
          border-radius: 0.5rem;
          background: #1e98d4;
          color: #fff;
        }
      }

      > span {
        display: flex;
        width: 100%;

        > input {
          border-radius: 0.25rem;
          border: 1px solid #1e3354;
          background: #fff;

          font-family: "Lato";
          padding: 0.75rem 1rem;
          margin-top: 1rem;
          width: 50%;
        }

        > input + input {
          margin-left: 4rem;
        }

        .lastChild {
          margin-right: 4rem;
        }
      }
    }
  }

  .CardsContainer {
    display: flex;
    flex-flow: column;
  }

  .cancelButton {
    background: transparent;
    border: 0;
    font-family: "Poppins";

    padding: 1rem;
    border-radius: 0.5rem;
    background: transparent;
    color: #aaa;

    width: 100%;
    margin-top: 1rem;
    text-align: center;
  }

  @media (max-width: 500px) {
    > div {
      > span {
        flex-direction: column;

        div + div {
          margin: 0;
        }

        div {
          width: 100%;
          margin-top: 1rem;
        }
      }
    }

    .titleContainer {
      flex-direction: column;
    }
  }
`;

export const CardSelector = styled.button`
  width: 30%;
  display: flex;

  border: 0.2px solid #aaa;
  border-radius: 4px;
  padding: 0.75rem;

  cursor: pointer;
  background: ${({ isSelected }) => (isSelected ? `#e5e5e5` : `transparent`)};

  &::before {
    content: "";
    width: 1.9rem;
    height: 1.75rem;
    border-radius: 50%;
    border: ${({ isSelected }) =>
      isSelected ? `8px solid #1e98d4` : `0.2px solid #888`};
  }

  &:active {
    margin-top: 0.2rem;
  }

  & + button {
    margin-top: 1rem;
  }

  > strong {
    width: 100%;
    font-family: "Poppins";
    font-weight: 400;
    text-align: right;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const Card = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;

  width: 400px;
  height: 250px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background: linear-gradient(
    57.28deg,
    #985cfa -8.14%,
    #458cf9 68.49%,
    #35c3f0 129.88%
  );

  color: #fff;
  font-family: "Poppins";

  > h3 {
    position: absolute;
    top: 10%;
    right: 5%;

    font-weight: 400;
    font-size: 1rem;
  }

  > strong {
    font-size: 1.5rem;
  }

  > p {
    position: absolute;

    bottom: 0;
    right: 5%;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row !important;
  justify-content: space-evenly;
  align-items: center;

  > button {
    background: transparent;
    border: 0;
    font-family: "Poppins";

    padding: 1rem;
    border-radius: 0.5rem;
    background: #1e98d4;
    color: #fff;
  }

  .logoutButton {
    background: transparent;
    color: #c53434;
  }
`;
