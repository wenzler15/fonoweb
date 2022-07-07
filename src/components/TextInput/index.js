import { FiAlertCircle } from "react-icons/fi";

import { Container, Input, MaskedInput } from "./styles";

function TextInput({
  title = "",
  name = "",
  error = null,
  mask = null,
  register,
  ...rest
}) {
  return (
    <Container>
      <label>{title}</label>

      {mask ? (
        <MaskedInput
          error={!!error}
          {...register(name)}
          mask={mask}
          {...rest}
        />
      ) : (
        <Input error={!!error} {...register(name)} {...rest} />
      )}

      {!!error && (
        <div>
          <FiAlertCircle size={16} />
          <strong>{error.message}</strong>
        </div>
      )}
    </Container>
  );
}

export default TextInput;
