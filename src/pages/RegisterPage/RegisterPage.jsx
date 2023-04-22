import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authLoginThunk } from 'Redux/auth/auth.thunk';

import { toast } from 'react-toastify';

import { publicApi } from '../../http/http';

import {ArrowSvg} from '../../images/arrowSvg';
import { Container } from 'components/Container/Container';
import { Form } from 'components/Form/Form';
import { Label } from 'components/Label/Label';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';
import { NavigateUnauthorized } from 'components/NavigateUnauthorized/NavigateUnauthorized';

const initialState = {
  email: '',
  name: '',
  password: '',
  authType: 'signUp'
};

const RegisterPage = () => {

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState(initialState);

useEffect(()=>
{  
    setValues(prev => ({ ...prev, name: values.name }));
    },[values.name])

const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      setIsLoading(true);
      await publicApi.post('/signUp', values);
      dispatch(authLoginThunk(...values));
      setIsLoading(false);
      //toast.success('Success!');
    } catch (e) {
      console.log(e);
      toast.error('Some error');
    }
  };

  return (
    <>
      {isLoading && <p>Loading ...</p>}

      <Container>
        
        <Form title="Sign Up" action="#" onSubmit={handleSubmit}>
             
          <Label>Name<Input
            id="name"
            name="name"
            type="name"
            autoComplete="off"
            value={values.name}
            onChange={handleChange}
            placeholder='Enter your name'
            required
          /></Label>
          
          <Label>Email<Input
            id="email"
            name="email"
            type="email"
            autoComplete="username"
            value={values.email}
            onChange={handleChange}
            placeholder='Enter email'
            required
          /></Label>
          
          <Label>Password<Input
            id="password"
            name="password"
            type={'password'}
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange}
            placeholder='Enter password'
            required
          /></Label>

        <Button type="submit">
          Sign Up <ArrowSvg/>
        </Button>
        <ArrowSvg/>

      </Form>

      <NavigateUnauthorized to="/login" title='Log In'/>

      </Container>
    </>
  );
};

export default RegisterPage;
