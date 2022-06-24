import React from "react";

import { Container } from "./styles";

function TextInput({ title = "", ...rest }) {
  return (
    <Container>
      <strong>{title}</strong>

      <input type="text" {...rest} />
    </Container>
  );
}

export default TextInput;
