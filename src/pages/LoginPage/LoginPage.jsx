import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { Container } from 'components/Container/Container';
import LoginForm from 'components/LoginForm/LoginForm';
import { SpinnerGrid } from 'components/Spinner/Grid';
import React, { useState } from 'react';



const LoginPage = () => {

  
  const [isLoading, setIsLoading] = useState(false);

  const changeLoading = (value) => setIsLoading(value);
  
  
  return (
    <Container page='login'>{ isLoading ? <SpinnerGrid /> :
        (<><LoginForm setIsLoading={changeLoading}/>
        <AuthNavigate to="/register" title="Sign up" /></>)}
    </Container>
  );
};

export default LoginPage;