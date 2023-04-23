import { Container } from 'components/Container/Container';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import RegisterForm from 'components/RegisterForm/RegisterForm';


const RegisterPage = () => {

  return (
      <Container page='register'>
        <RegisterForm/>
        <AuthNavigate to="/login" title="Log In" />
      </Container>
  );
};

export default RegisterPage;
