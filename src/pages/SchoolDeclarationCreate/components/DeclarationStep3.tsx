import React, { ChangeEvent } from 'react';
import { useFormik, FormikErrors, FormikTouched } from 'formik';
import { TextField } from '@mui/material';

interface FormValues {
  email: string;
  passwordTEST: string;
}

interface FormikProp {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  handleChange: (e: ChangeEvent<any>) => void;
  handleBlur: (e: any) => void;
  values: FormValues;
  touched: FormikTouched<FormValues>;
  errors: FormikErrors<FormValues>;
}

interface DeclarationStep3Props {
  formik: FormikProp;
}

const DeclarationStep3: React.FC<DeclarationStep3Props> = ({ formik }) => {
  return (
    <>
      <TextField
        fullWidth
        id='email'
        name='email'
        label='Email'
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        id='passwordTEST'
        name='passwordTEST'
        label='passwordTEST'
        type='password'
        value={formik.values.passwordTEST}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.passwordTEST && Boolean(formik.errors.passwordTEST)}
        helperText={formik.touched.passwordTEST && formik.errors.passwordTEST}
      />
    </>
  );
};

export default DeclarationStep3;
