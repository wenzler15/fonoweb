import styled from "styled-components";

export const Container = styled.div`
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
`;
