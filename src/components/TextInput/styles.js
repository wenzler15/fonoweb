import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;

  > strong {
    font-size: 1.2rem;
    font-weight: 600;
  }

  > input {
    border-radius: 0.25rem;
    border: 1px solid #1e3354;
    background: #fff;
    margin-top: 0.5rem;

    font-family: "Lato";
    padding: 0.75rem 1rem;
  }
`;
