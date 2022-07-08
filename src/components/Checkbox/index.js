import { FiAlertCircle } from "react-icons/fi";
import { Container } from "./styles";

function Checkbox({ name, error = null, register, children, ...rest }) {
  return (
    <Container>
      <div>
        <input type="checkbox" {...register(name)} {...rest} />
        <label>{children}</label>
      </div>

      {!!error && (
        <div>
          <FiAlertCircle size={16} />
          <strong>{error.message}</strong>
        </div>
      )}
    </Container>
  );
}

export default Checkbox;
