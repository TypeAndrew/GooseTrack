import { Container } from 'components/Container/Container';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { SpinnerGrid } from 'components/Spinner/Grid';
import { useState } from 'react';


const RegisterPage = () => {

   
  const [isLoading, setIsLoading] = useState(false);

  const changeLoading = (value) => setIsLoading(value); 

  return (
      <Container page='register'>{ isLoading ? <SpinnerGrid /> :
      (<><RegisterForm setIsLoading={changeLoading}/>
        <AuthNavigate to="/login" title="Log In" /></>)}
      </Container>
  );
};

export default RegisterPage;
