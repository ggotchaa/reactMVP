import React, { useState } from 'react';
import { Box, Button, Tab, Tabs, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { form_msg } from '../../../utils/constants';

type PasswordRecoveryFormProps = {
  handlers: {
    // Add any required handlers here if needed
  };
};

const PasswordRecovery: React.FC<PasswordRecoveryFormProps> = ({ handlers }) => {
  const [recoveryType, setRecoveryType] = useState<string>('passrecovery');
  const [currentStep, setCurrentStep] = useState<number>(1); // Initialize with step 1
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email_address: '',
      verification_code: '',
      new_password: '',
      confirm_new_password: '',
    },
    // Validation schema for each step
    validationSchema: yup.object().shape({
      // email_address: yup.string().when('currentStep', {
      //   is: 1,
      //   then: yup.string().required(form_msg.REQUIRED),
      // }),
      // verification_code: yup.string().when('currentStep', {
      //   is: 2,
      //   then: yup.string().required('Verification code is required'),
      // }),
      // new_password: yup.string().when('currentStep', {
      //   is: 3,
      //   then: yup
      //     .string()
      //     .required(form_msg.REQUIRED)
      //     .min(6, 'Password must be at least 6 characters'),
      // }),
      // confirm_new_password: yup.string().when('currentStep', {
      //   is: 3,
      //   then: yup
      //     .string()
      //     .required(form_msg.REQUIRED)
      //     .oneOf([yup.ref('new_password')], 'Passwords do not match'),
      // }),
    }),
    async onSubmit(values, { resetForm }) {
      console.log(values);

      try {
        // Handle each step accordingly
        switch (currentStep) {
          case 1:
            // Step 1: Perform actions for email submission, e.g., send verification code to email
            // You can add the logic here to send the verification code to the user's email
            // Once the code is sent, move to the next step
            setCurrentStep(2);
            break;
          case 2:
            // Step 2: Perform actions for verification code submission
            // You can add the logic here to verify the code entered by the user
            // If the code is valid, move to the next step
            setCurrentStep(3);
            break;
          case 3:
            // Step 3: Perform actions for new password submission
            // You can add the logic here to update the user's password
            // Once the password is updated, reset the form and set the step back to 1
            resetForm();
            setCurrentStep(1);
            break;
          default:
            break;
        }
      } catch (err) {
        const error = err as Error;
        alert(error.message);
        // enqueueSnackbar(error.data.message, {variant: 'error'});
      }
    },
  });

  return (
    <>
      <Typography variant="h2" component="h2" sx={{ mb: 4 }}>
        Забыли пароль?
      </Typography>

      <Typography
        component="span"
        sx={{ mt: 2, mb: 4, padding: '0 16px', textAlign: 'center' }}
      >
        Выберите вид восстановления
      </Typography>

      <Box sx={{ width: '100%', mb: 4 }}>
        <Tabs
          value={recoveryType}
          onChange={(e, v) => setRecoveryType(v)}
          variant="fullWidth"
          aria-label="wrapped label tabs example"
        >
          <Tab value="passrecovery" label="E-Mail" />
          <Tab value="byfile" label="ЭЦП" />
        </Tabs>
      </Box>

      <form onSubmit={handleSubmit}>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          {currentStep === 1 && recoveryType === 'passrecovery' && (
            <>
              <Box
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  marginBottom: '32px',
                }}
              >
                <TextField
                  name="email_address"
                  value={values.email_address}
                  label="Электронная почта"
                  placeholder="Введите электронную почту"
                  error={
                    Boolean(
                      touched.email_address && errors.email_address
                    ) || false
                  }
                  helperText={
                    (touched.email_address && errors.email_address) || false
                  }
                  onChange={handleChange}
                />
              </Box>

              <Button
                sx={{ flex: 1 }}
                type="submit"
                disabled={!values.email_address}
              >
                Отправить
              </Button>
            </>
          )}

          {currentStep === 2 && recoveryType === 'passrecovery' && (
            <>
              <Box
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  marginBottom: '32px',
                }}
              >
                <TextField
                  name="verification_code"
                  value={values.verification_code}
                  label="Код восстановления"
                  placeholder="Введите код восстановления"
                  error={
                    Boolean(
                      touched.verification_code &&
                        errors.verification_code
                    ) || false
                  }
                  helperText={
                    (touched.verification_code &&
                      errors.verification_code) || false
                  }
                  onChange={handleChange}
                />
              </Box>

              <Button
                sx={{ flex: 1 }}
                type="submit"
                disabled={!values.verification_code}
              >
                Подтвердить
              </Button>
            </>
          )}

          {currentStep === 3 && recoveryType === 'passrecovery' && (
            <>
              <Box
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  marginBottom: '32px',
                }}
              >
                <TextField
                  name="new_password"
                  value={values.new_password}
                  label="Новый пароль"
                  type="password"
                  placeholder="Введите новый пароль"
                  error={
                    Boolean(
                      touched.new_password && errors.new_password
                    ) || false
                  }
                  helperText={
                    (touched.new_password && errors.new_password) || false
                  }
                  onChange={handleChange}
                />
              </Box>

              <Box
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  marginBottom: '32px',
                }}
              >
                <TextField
                  name="confirm_new_password"
                  value={values.confirm_new_password}
                  label="Подтвердите новый пароль"
                  type="password"
                  placeholder="Подтвердите новый пароль"
                  error={
                    Boolean(
                      touched.confirm_new_password &&
                        errors.confirm_new_password
                    ) || false
                  }
                  helperText={
                    (touched.confirm_new_password &&
                      errors.confirm_new_password) || false
                  }
                  onChange={handleChange}
                />
              </Box>

              <Button
                sx={{ flex: 1 }}
                type="submit"
                disabled={
                  !values.new_password || values.new_password !== values.confirm_new_password
                }
              >
                Сохранить пароль
              </Button>
            </>
          )}
        </Box>
      </form>
    </>
  );
};

export default PasswordRecovery;
