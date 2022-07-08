import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;

  > div {
    display: flex;
    flex-flow: row;
    align-items: center;
    margin-top: 0.5rem;

    > label {
      font-size: 0.85rem;
      margin-left: 1rem;
      font-weight: 600;
    }

    > input {
      height: 1rem;
      width: 1rem;
    }

    > svg {
      color: #ea3a3d;
    }

    > strong {
      background: transparent !important;
      color: #ea3a3d !important;
      margin-left: 0.25rem !important;
      font-size: 0.75rem !important;
    }
  }
`;
