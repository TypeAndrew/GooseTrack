import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logIn } from '../../Redux/auth/authOperations';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Form } from 'components/Form/Form';
import { Label } from 'components/Label/Label';
import { Button } from 'components/Button/Button';
import { ErrorDiv, ButtonToggleIcon, DivWrap } from '../RegisterForm/RegisterForm_css';
import { ReactComponent as IconEye } from '../../images/icons/eye.svg';
import { ReactComponent as IconEyeHidden } from '../../images/icons/hide-eye.svg';
import { ReactComponent as IconLogout } from '../../images/icons/icon-logout.svg';

const LoginForm = () => {
  const [toggleIcon, setToggleIcon] = useState(<IconEyeHidden/>);
  const [typeInput, setTypeInput] = useState('password');

  const togglePasswordView = () => {
    if (typeInput === 'password') {
      setTypeInput('text');
      setToggleIcon(<IconEye/>);
    } else {
      setTypeInput('password');
      setToggleIcon(<IconEyeHidden/>);
    }
  };

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const SignupSchema = Yup.object().shape({
    email: Yup.string().required('Required').email('Invalid email'),

    password: Yup.string()
      .required('Required')
      .min(6, 'Password must be 6 characters or more')
      .max(60, 'Password must be 60 characters or less')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{6,60})/,
        'Password must contain a number, an uppercase and lowercase letter, and a special character'
      ),
  });

  return (
    <>
      {isLoading && <p>Loading ...</p>}

      <Formik
        validationSchema={SignupSchema}
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values, actions) => {

          console.log('submit', values);
          // try {
            setIsLoading(true);
          await  dispatch(logIn({
                email: values.email,
                password: values.password,
              }));
            setIsLoading(false);
          actions.resetForm({
            values: {
              email: '',
              password: '',
            },
          });
        }}
      >
        {({ errors, touched, handleReset }) => (
          <Form title="Log In" noValidate="noValidate">
            <Label>
              Email
              <Field
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                placeholder="Enter email"
                
              />
            </Label>
            <ErrorMessage component={ErrorDiv} name="email" />

            <Label>
              Password
              <DivWrap><Field
                id="password"
                name="password"
                type={typeInput}
                autoComplete="current-password"
                placeholder="Enter password"
              />
              <ButtonToggleIcon type='button' onClick={togglePasswordView}>{toggleIcon}</ButtonToggleIcon></DivWrap>
            </Label>
            <ErrorMessage component={ErrorDiv} name="password" />
            <Button type="submit">Log in <IconLogout/></Button>
          </Form>
        )}
      </Formik>
      <ToastContainer/>
    </>
  );
};

export default LoginForm;