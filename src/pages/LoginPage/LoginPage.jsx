import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { Container } from 'components/Container/Container';
import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';



const LoginPage = () => {
  
  return (
    <Container page='login'>
        <LoginForm/>
        <AuthNavigate to="/register" title="Sign up" />
    </Container>
  );
};

export default LoginPage;