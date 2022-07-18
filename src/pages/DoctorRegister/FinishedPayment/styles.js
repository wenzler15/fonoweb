import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 75vh;

  margin: auto;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  font-family: "Lato" !important;

  > h1 {
    font-weight: 700 !important;
    max-width: 66%;
    text-align: center;
    margin-bottom: 3rem;
  }

  > button {
    width: 100% !important;
    padding: 1.5rem !important;
    border-radius: 4px !important;
    border: 1px solid #1e3354 !important;

    font-weight: 600;
    font-size: 1.25rem;
    color: #1e3354 !important;
    background: transparent !important;
    margin-top: 2rem !important;
  }

  .gradient {
    color: #fff !important;
    background: linear-gradient(
      101.16deg,
      #803888 16.47%,
      #1e98d4 78.67%
    ) !important;
  }
`;
