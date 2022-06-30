import React from "react";
import { FiAlertCircle } from "react-icons/fi";

import { Container } from "./styles";

function TextInput({ title = "", name = "", register, error = null, ...rest }) {
  return (
    <Container>
      <label>{title}</label>

      <input {...register(name)} {...rest} />

      {error && (
        <div>
          <FiAlertCircle size={16} />
          <strong>{error.message}</strong>
        </div>
      )}
    </Container>
  );
}

export default TextInput;
