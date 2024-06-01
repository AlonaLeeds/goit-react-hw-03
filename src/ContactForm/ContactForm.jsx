import React from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from './ContactForm.module.css';

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Занадто коротке ім'я!")
    .max(50, "Занадто довге ім'я!")
    .required("Обов'язково"),
  number: Yup.string()
    .matches(/^[0-9()+\-]+$/, "Номер телефону не є дійсним")
    .min(6, "Занадто короткий номер!")
    .max(18, "Занадто довгий номер!")
    .required("Обов'язково"),
});

const ContactForm = ({ onAdd }) => (
  <Formik
    initialValues={{ name: '', number: '' }}
    validationSchema={ContactsSchema}
    onSubmit={(values, actions) => {
      values.id = nanoid();
      onAdd(values);
      actions.resetForm();
    }}
  >
    {() => (
      <Form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="number">Number</label>
          <Field id="number" name="number" className={styles.input} />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </div>
        <button type="submit" className={styles.btn}>Add contact</button>
      </Form>
    )}
  </Formik>
);

export default ContactForm;