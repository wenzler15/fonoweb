import React, { useRef } from "react";

import { Container } from "./styles";

function RadioInput({ register, name = "", label = "", ...rest }) {
  const inputRef = useRef(null);

  const handleCheck = () => {
    inputRef.current.checked = true;
  };

  return (
    <Container onClick={handleCheck}>
      <input ref={inputRef} type="radio" {...register(name)} {...rest} />
      <label>{label}</label>
    </Container>
  );
}

export default RadioInput;
