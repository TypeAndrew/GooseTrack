import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';

import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { register } from 'Redux/auth/authOperations';

import { Form } from 'components/Form/Form';
import { Label } from 'components/Label/Label';
import { Button } from 'components/Button/Button';
import { ErrorDiv, ButtonToggleIcon, DivWrap } from './RegisterForm.styled';
import { ReactComponent as IconEyeHidden } from '../../images/icons/hide-eye.svg';
import { ReactComponent as IconLogout } from '../../images/icons/icon-logout.svg';
import { togglePasswordView } from '../../helpers/togglePasswordView/togglePasswordView';

const RegisterForm = ({ setIsLoading }) => {
  const [toggleButton, setToggleButton] = useState({
    typeInput: 'password',
    toggleIcon: <IconEyeHidden />,
  });

  const onClick = () => {
    setToggleButton(togglePasswordView(toggleButton.typeInput));
  };

  const dispatch = useDispatch();

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .required('Required')
      .min(3, 'Name must be 3 characters or more')
      .max(16, 'Name must be 16 characters or less'),
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
          name: '',
          password: '',
        }}
        onSubmit={async (values, actions) => {
          setIsLoading(true);

          await dispatch(
            register({
              name: values.name,
              email: values.email,
              password: values.password,
            })
          );

          setIsLoading(false);

          actions.resetForm({
            values: {
              email: '',
              name: '',
              password: '',
            },
          });
        }}
      >
        {({ errors, touched, handleReset }) => (
          <Form title="Sign Up" noValidate="noValidate">
            <Label
              color={
                touched.name && errors.name && 'var(--error-validation-color)'
              }
            >
              Name
              <DivWrap>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="off"
                  placeholder="Enter your name"
                  border={
                    touched.name &&
                    errors.name &&
                    '1px solid var(--error-validation-color)'
                  }
                />
                <ErrorMessage component={ErrorDiv} name="name" />{' '}
              </DivWrap>
            </Label>

            <Label
              color={
                touched.email && errors.email && 'var(--error-validation-color)'
              }
            >
              Email
              <DivWrap>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  placeholder="Enter email"
                  border={
                    touched.email &&
                    errors.email &&
                    '1px solid var(--error-validation-color)'
                  }
                />
                {/* {touched.email && errors.email && <div>{errors.email}</div>} */}
                <ErrorMessage component={ErrorDiv} name="email" />
              </DivWrap>
            </Label>
            <Label
              name="password"
              color={
                touched.password &&
                errors.password &&
                'var(--error-validation-color)'
              }
            >
              Password
              <DivWrap>
                <Field
                  id="password"
                  name="password"
                  type={toggleButton.typeInput}
                  autoComplete="current-password"
                  placeholder="Enter password"
                  border={
                    touched.password &&
                    errors.password &&
                    '1px solid var(--error-validation-color)'
                  }
                />
                <ButtonToggleIcon type="button" onClick={onClick}>
                  {toggleButton.toggleIcon}
                </ButtonToggleIcon>
                <ErrorMessage component={ErrorDiv} name="password" />
              </DivWrap>
            </Label>
            <Button type="submit">
              Sign Up
              <IconLogout />
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
