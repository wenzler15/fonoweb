import styled from "styled-components";

export const Container = styled.div`
  form {
    margin: 4rem;

    h1 {
      font-size: 2rem;
      font-weight: 700;
      font-family: "Poppins";
    }

    h2 {
      font-size: 1.5rem;
      margin-top: 1rem;
      font-weight: 700;
      font-family: "Poppins";
    }

    section {
      display: flex;
      margin-top: 1rem;

      > div {
        width: 50%;

        & + div {
          margin-left: 4rem;
        }
      }
    }

    button {
      background: #1e98d4;
      color: #fff;

      width: 250px;

      padding: 0.5rem 1rem;
      margin-top: 2rem;
      border-radius: 2rem;
      border: 0;
    }
  }
`;
