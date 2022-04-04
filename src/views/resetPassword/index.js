import React from 'react';
import * as yup from 'yup';
import { Formik, Form as FormikForm } from 'formik';
import cx from 'classnames';
import { TextInput, Button } from '#components/form';
import styles from './_resetPassword.module.scss';

function ResetPassword() {
  const validationSchema = yup.object().shape({
    password: yup
      .string()
      .min(6, 'Password shall be atleast 6 characters long.')
      .max(20, 'Password shall be max 20 characters long.')
      .required('Please enter password'),
    confirmPassword: yup
      .string()
      .required('Please enter confirm password')
      .when('password', {
        is: (val) => (val && val.length > 0 ? true : false),
        then: yup
          .string()
          .oneOf([yup.ref('password')], 'Both password should be same'),
      }),
  });

  return (
    <div className={styles['reset-password']}>
      <Formik
        initialValues={{
          password: '',
          confirmPassword: '',
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
              <h4 className={styles['title']}> Setup New Password</h4>
              <h5 className={cx('pb-5 pt-3', styles['login-fill'])}>
                Type in your new password and confirm
              </h5>
            </div>
            <div className={cx('pb-5')}>
              <TextInput
                label="Enter New Password"
                name="password"
                type="password"
                id="password"
                autocomplete="off"
              />
            </div>

            <div className={cx('pb-5')}>
              <TextInput
                label="Confirm New Password"
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                autocomplete="off"
              />
            </div>

            <Button>Reset</Button>
          </div>
        </FormikForm>
      </Formik>
    </div>
  );
}

export default ResetPassword;
