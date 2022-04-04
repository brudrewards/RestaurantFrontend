import React from 'react';
import * as yup from 'yup';
import { Formik, Form as FormikForm } from 'formik';
import cx from 'classnames';
import Link from 'next/link';
import { TextInput, Button } from '#components/form';
import styles from './_passwordSent.module.scss';

function PasswordSent() {
  const validationSchema = yup.object().shape({});

  return (
    <div className={styles['password-sent']}>
      <Formik
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        <FormikForm>
          <div className="mobile-container">
            <img
              src="static/images/locked.png"
              alt="locked"
              className={styles['locked-img']}
            />
            <p className={styles['description']}>
              we have sent you a password recovery link on your register email
              address
            </p>
            <Link href="/reset-password">
              <a>
                <Button>Reset Password</Button>
              </a>
            </Link>
          </div>
        </FormikForm>
      </Formik>
    </div>
  );
}

export default PasswordSent;
