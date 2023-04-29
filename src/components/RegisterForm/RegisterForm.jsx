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

const RegisterForm = ({setIsLoading}) => {
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
                <Label>
                  Name
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="off"
                    placeholder="Enter your name"
                    
                  />
                </Label>
                <ErrorMessage component={ErrorDiv} name="name" /> 

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
                  </DivWrap>
                </Label>
                <ErrorMessage component={ErrorDiv} name="password" />
                <Button type="submit">
                  Sign Up
                  <IconLogout />
                </Button>
              </Form>
            )}
          </Formik>
        </>
      )

};

export default RegisterForm;
