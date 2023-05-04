import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logIn } from '../../Redux/auth/authOperations';

import 'react-toastify/dist/ReactToastify.css';

import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Form } from 'components/Form/Form';
import { Label } from 'components/Label/Label';
import { Button } from 'components/Button/Button';
import {
  ErrorDiv,
  ButtonToggleIcon,
  DivWrap,
} from '../RegisterForm/RegisterForm.styled';
import { ReactComponent as IconEyeHidden } from '../../images/icons/hide-eye.svg';
import { ReactComponent as IconLogout } from '../../images/icons/icon-logout.svg';
import { togglePasswordView } from '../../Helpers/togglePasswordView/togglePasswordView';

const LoginForm = ({ setIsLoading }) => {
  const [toggleButton, setToggleButton] = useState({
    typeInput: 'password',
    toggleIcon: <IconEyeHidden />,
  });

  const onClick = () => {
    setToggleButton(togglePasswordView(toggleButton.typeInput));
  };

  const dispatch = useDispatch();

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
      <Formik
        validationSchema={SignupSchema}
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values, actions) => {
          setIsLoading(true);
          await dispatch(
            logIn({
              email: values.email,
              password: values.password,
            })
          );
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
            <Label color={
                touched.email && errors.email && 'var(--error-validation-color)'
              }>
              Email
              <DivWrap>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  placeholder="Enter email"
                />
                <ErrorMessage component={ErrorDiv} name="email" />
              </DivWrap>
            </Label>

            <Label color={
                touched.password && errors.password && 'var(--error-validation-color)'}>
              Password
              <DivWrap>
                <Field
                  id="password"
                  name="password"
                  type={toggleButton.typeInput}
                  autoComplete="current-password"
                  placeholder="Enter password"
                />
                <ButtonToggleIcon type="button" onClick={onClick}>
                  {toggleButton.toggleIcon}
                </ButtonToggleIcon>
                <ErrorMessage component={ErrorDiv} name="password" />
              </DivWrap>
            </Label>
            <Button type="submit">
              Log in <IconLogout />
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
