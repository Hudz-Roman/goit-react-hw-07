import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsOps';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const orderSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Should be 3 or more symbols')
      .max(50, 'Should be less than 50 symbols')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Should be 3 or more symbols')
      .max(50, 'Should be less than 50 symbols')
      .required('Required'),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={orderSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleSubmit }) => (
          <Form className={s.form} onSubmit={handleSubmit}>
            <label className={s.label}>
              <span>Name</span>
              <Field
                name='name'
                placeholder='Type your name'
                type='text'
                value={values.name.trim()}
              />
              <ErrorMessage name='name' component='span' className={s.error} />
            </label>
            <label className={s.label}>
              <span>Number</span>
              <Field
                name='number'
                placeholder='Type your number'
                type='text'
                value={values.number.trim()}
              />
              <ErrorMessage
                name='number'
                component='span'
                className={s.error}
              />
            </label>
            <button type='submit' className={s.btn}>
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
