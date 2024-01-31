import React, { ChangeEvent } from 'react';
import { useFormik, FormikErrors, FormikTouched } from 'formik';
import { Box, TextField } from '@mui/material';
import BoxCard from '../../../components/BoxCard';

interface FormValues {
  organization_name: string;
}

interface FormikProp {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  handleChange: (e: ChangeEvent<any>) => void;
  handleBlur: (e: any) => void;
  values: FormValues;
  touched: FormikTouched<FormValues>;
  errors: FormikErrors<FormValues>;
}

interface DeclarationStep2Props {
  formik: FormikProp;
}

const DeclarationStep2: React.FC<DeclarationStep2Props> = ({ formik }) => {
  return (
    <form id='declarations_step_2' onSubmit={formik.handleSubmit}>
      <BoxCard title={'Сведения об организации'}>
        <TextField
          name='organization_name'
          value={formik.values.organization_name}
          label='organization_name'
          placeholder='organization_name'
          error={Boolean(formik?.touched?.organization_name && formik?.errors?.organization_name) || false}
          helperText={(formik?.touched?.organization_name && formik?.errors?.organization_name) || false}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </BoxCard>
    </form>
  );
};

export default DeclarationStep2;
