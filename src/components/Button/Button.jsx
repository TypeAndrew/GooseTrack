import { ButtonComponent} from "./Button.styled";

export const Button = ({ type = 'button', isLoading, children, disabled, ...props }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <ButtonComponent type={type} {...props} disabled={isLoading || disabled}>
      {isLoading ? (
        <>
          <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
          <span className="ms-2">Loading...</span>
        </>
      ) : (
        children
      )}
    </ButtonComponent>
  );
};