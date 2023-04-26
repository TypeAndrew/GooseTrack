import { ButtonComponent } from './Button.styled';

export const Button = ({
  type = 'button',
  children,
  disabled,
  ...props
}) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <ButtonComponent type={type} {...props} disabled={disabled}>
      {children}
    </ButtonComponent>
  );
};
