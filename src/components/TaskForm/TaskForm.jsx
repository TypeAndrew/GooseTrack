import React from 'react';
import { useParams } from 'react-router';
import { Formik } from 'formik';
import { isAfter, isValid, parse } from 'date-fns';
import * as Yup from 'yup';
import * as STC from './TaskForm.styled';
import { TextAdd } from './TaskForm.styled';
import { ReactComponent as EditTask } from '../../images/icons/edit_white.svg';
import { ReactComponent as Plus } from '../../images/icons/plus_white.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksThunk, postTasksThunk } from '../../Redux/tasks/tasks.thunk';

export const TaskForm = ({ taskFormData, status, onClose }) => {
  const dispatch = useDispatch();

  const initialValues = {
    title: taskFormData?.title || '',
    start: taskFormData?.start || '',
    end: taskFormData?.end || '',
    priority: taskFormData?.priority || 'Low',
  };

  const { currentDay: date } = useParams();
  const time = useSelector(state => state.calendar.time);

  const handleAdd = async values => {
    // console.log('values====>', values);
    const addData = { ...values, date, category: status };
    // console.log('addData====>', addData);

   await dispatch(postTasksThunk(addData));  

    await dispatch(getTasksThunk(time))
  
    // console.log('add task done');
    onClose();
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .required('Title is required')
      .max(250, 'Title should not exceed 250 characters'),
    start: Yup.string()
      .test('valid-time', 'Invalid time format', value =>
        isValid(parse(value, 'HH:mm', new Date()))
      )
      .required('Start is required'),
    end: Yup.string()
      .nullable()
      .test('valid-time', 'Invalid time format', value => {
        if (!value) return true; 
        return isValid(parse(value, 'HH:mm', new Date()));
      })
      .when('start', (start, schema) =>
        schema.test('end-time-greater', 'Less than start', end =>
          start && end
            ? isAfter(
                parse(end, 'HH:mm', new Date()),
                parse(start, 'HH:mm', new Date())
              )
            : true
        )
      ),
    priority: Yup.string()
      .required('Priority is required')
      .oneOf(['Low', 'Medium', 'High'], 'Invalid priority'),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validateOnBlur={true}
        validateOnChange={true}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleAdd(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          
        }) => (
          <STC.Form onSubmit={handleSubmit}>
            <STC.Label htmlFor="title">
              <STC.Span>Title</STC.Span>
              <STC.Input
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                placeholder="Enter text"
              />
              <STC.Errors>
                {errors.title && touched.title && errors.title}
              </STC.Errors>
            </STC.Label>

            <STC.Wrapper>
              <STC.Label htmlFor="start">
                <STC.Span>Start</STC.Span>
                <STC.Input
                  type="time"
                  step="60"
                  name="start"
                  id="start"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.start}
                  placeholder="Select time"
                />
                <STC.Errors>
                  {errors.start && touched.start && errors.start}
                </STC.Errors>
              </STC.Label>

              <STC.Label htmlFor="end">
                <STC.Span>End</STC.Span>
                <STC.Input
                  type="time"
                  step="60"
                  name="end"
                  id="end"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.end}
                  placeholder="Select time"
                />
                <STC.Errors>
                  {errors.end && touched.end && errors.end}
                </STC.Errors>
              </STC.Label>
            </STC.Wrapper>

            <STC.RadioButtonGroup>
              {['Low', 'Medium', 'High'].map(priority => (
                <STC.RadioButtonLabel key={priority}>
                  <STC.RadioButtonInput
                    type="radio"
                    value={priority}
                    name="priority"
                    checked={values.priority === priority}
                    onChange={() => {
                      setFieldValue('priority', priority);
                    }}
                  />
                  {priority}
                </STC.RadioButtonLabel>
              ))}
            </STC.RadioButtonGroup>

            <STC.Wrapper>
              {
                ((!taskFormData.title) ? (
                  <>
                    <STC.Button type="submit">
                      <Plus/>
                      <TextAdd>Add</TextAdd>
                    </STC.Button>
                    <STC.ButtonCancel
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => {
                        onClose();
                      }}
                    >
                      Cancel
                    </STC.ButtonCancel>
                  </>
                ) : (
                  <STC.Button
                    type="submit"
                    onClick={() => {
                      console.log('handleSubmit called');
                    }}
                    disabled={isSubmitting}
                  >
                    <EditTask/>
                    Edit
                  </STC.Button>
                ))
              }
            </STC.Wrapper>
          </STC.Form>
        )}
      </Formik>
    </>
  );
};
