import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { register } from 'Redux/auth/authOperations';

import { Form } from 'components/Form/Form';
import { Label } from 'components/Label/Label';
import { Button } from 'components/Button/Button';
import {ErrorDiv} from './RegisterForm_css'

const RegisterForm = () => {

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

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
      {isLoading && <p>Loading ...</p>}
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

          console.log('submit', values);
          try {
            setIsLoading(true);
            dispatch(register({
                name: values.name,
                email: values.email,
                password: values.password,
              }));
            setIsLoading(false);
          } catch (e) {
            toast.error(e, {
                position: toast.POSITION.TOP_LEFT
              });
            setIsLoading(false);
          }
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
              <Field
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter password"
                
              />
            </Label>
            <ErrorMessage component={ErrorDiv} name="password" />
            <Button type="submit">Sign Up</Button>
          </Form>
        )}
      </Formik>
      <ToastContainer/>
    </>
  );
};

export default RegisterForm;
