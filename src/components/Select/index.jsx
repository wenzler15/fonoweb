import { FiAlertCircle } from "react-icons/fi";

import { Container, StyledSelect } from "./styles";

function Select({
  options,
  register,
  title = "",
  name = "",
  placeholder = "",
  defaultValue = "",
  error = null,
  ...rest
}) {
  return (
    <Container>
      <label>{title}</label>

      <StyledSelect error={!!error} {...register(name)} {...rest}>
        <option value="" hidden>
          {placeholder}
        </option>

        {options?.map(({ name, value }, index) => (
          <option key={index} value={value}>
            {name}
          </option>
        ))}
      </StyledSelect>

      {error && (
        <div>
          <FiAlertCircle size={16} />
          <strong>{error.message}</strong>
        </div>
      )}
    </Container>
  );
}

export default Select;
