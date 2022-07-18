import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  > section {
    display: flex;
    width: 100%;
    padding: 1rem;

    > div {
      width: 100%;

      & + div {
        margin-left: 2rem;
      }
    }
  }

  > button {
    margin-top: 2rem;
    background: #1e98d4;
    color: #fff;
    font-family: "Poppins";
    font-size: 1.5rem;

    align-self: flex-start;

    padding: 0 2rem;
    border-radius: 2rem;
    border: 0;
  }
`;
