import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik, Form as FormikForm } from 'formik';
import cx from 'classnames';
import { TextInput, Button } from '#components/form';
import PasswordSent from './passwordSent';
import styles from './_forgotPassword.module.scss';

function ForgotPassword() {
  const [isPasswordSent, setIsPasswordSent] = useState(false);
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Email must be a valid email')
      .required('Please enter your email'),
  });

  const onSubmit = () => {
    setIsPasswordSent(true);
  };

  return (
    <div className={styles['forgot-password']}>
      {isPasswordSent ? (
        <PasswordSent />
      ) : (
        <>
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              onSubmit(values);
            }}
          >
            <FormikForm>
              <div className="mobile-container">
                <div className={cx('pb-3 mb-3 pt-4', styles['logo-container'])}>
                  <img
                    className={styles['logo-img']}
                    src="static/images/logo.png"
                    alt="brud logo"
                  />
                  <div className={styles['logo-merchant']}>MERCHANT</div>
                </div>
                <div>
                  <h4 className={styles['title']}> Login your account</h4>
                  <h5 className={cx('pb-5 pt-3', styles['login-fill'])}>
                    Enter your resister email id and get code
                  </h5>
                </div>
                <div className={cx('pb-5 mb-5')}>
                  <TextInput
                    label="Email address"
                    name="email"
                    type="email"
                    id="email"
                  />
                </div>

                <Button>Send reset password link</Button>
              </div>
            </FormikForm>
          </Formik>
        </>
      )}
    </div>
  );
}

export default ForgotPassword;
