import React from 'react';
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authLoginThunk } from 'Redux/auth/auth.thunk';

import { toast } from 'react-toastify';

import { publicApi } from '../../http/http';

import { Form } from 'components/Form/Form';
import { Label } from 'components/Label/Label';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';

// const initialState = {
//   email: '',
//   name: '',
//   password: '',
// //   authType: 'signUp',
// };

const RegisterForm = () => {
  const dispatch = useDispatch();

//   const [values, setValues] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setValues(prev => ({ ...prev, name: values.name }));
//   }, [values.name]);

//   const handleChange = event => {
//     const { value, name } = event.target;
//     setValues(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async event => {
//     event.preventDefault();

//     try {
//       setIsLoading(true);
//       await publicApi.post('/signUp', values);
//       dispatch(authLoginThunk(...values));
//       setIsLoading(false);
//       //toast.success('Success!');
//     } catch (e) {
//       console.log(e);
//       toast.error('Some error');
//     }
//   };

//   return (
//     <>
//       {isLoading && <p>Loading ...</p>}

//       <Form title="Sign Up" action="#" onSubmit={handleSubmit}>
//         <Label>
//           Name
//           <Input
//             id="name"
//             name="name"
//             type="name"
//             autoComplete="off"
//             value={values.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             required
//           />
//         </Label>

//         <Label>
//           Email
//           <Input
//             id="email"
//             name="email"
//             type="email"
//             autoComplete="username"
//             value={values.email}
//             onChange={handleChange}
//             placeholder="Enter email"
//             required
//           />
//         </Label>

//         <Label>
//           Password
//           <Input
//             id="password"
//             name="password"
//             type={'password'}
//             autoComplete="current-password"
//             value={values.password}
//             onChange={handleChange}
//             placeholder="Enter password"
//             required
//           />
//         </Label>

//         <Button type="submit">Sign Up</Button>
//       </Form>
//     </>
//   );



  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
        email: '',
        name: '',
        password: '',
    },
    onSubmit: async values => {
            // event.preventDefault();
        
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
          }
    },
  );
  return (
    <Form title="Sign Up" onSubmit={formik.handleSubmit}>
       <Label>
          Name
          <Input
            id="name"
            name="name"
            type="name"
            autoComplete="off"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Enter your name"
            required
          />
        </Label>

        <Label>
          Email
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="username"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Enter email"
            required
          />
        </Label>

        <Label>
          Password
          <Input
            id="password"
            name="password"
            type='password'
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Enter password"
            required
          />
        </Label>

        <Button type="submit">Sign Up</Button>
      </Form>
  );
};


export default RegisterForm;
