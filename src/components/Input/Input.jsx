import { InputComponent } from './Input_css';

export const Input = ({
  id,
  name,
  type,
  autoComplete,
  value,
  onChange,
  placeholder,
  required,
}) => {
  return (
    <InputComponent
      id={id}
      type={type}
      name={name}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={false || required}
    ></InputComponent>
  );
};
