import styled, { css } from "styled-components";
import InputMask from "react-input-mask";

export const Container = styled.div`
  display: flex;
  flex-flow: column;

  > label {
    font-size: 1.2rem;
    font-weight: 600;
  }

  > div {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;

    > svg {
      color: #ea3a3d;
    }

    > strong {
      color: #ea3a3d;
      margin-left: 0.25rem;
      font-size: 0.75rem;
    }
  }
`;

const inputStyle = css`
  border-radius: 0.25rem;
  border: ${({ error }) => (error ? "1px solid #ea3a3d" : "1px solid #1e3354")};
  background: #fff;
  margin-top: 0.5rem;

  font-family: "Lato";
  padding: 0.75rem 1rem;
`;

export const MaskedInput = styled(InputMask)`
  ${inputStyle}
`;

export const Input = styled.input`
  ${inputStyle}
`;
