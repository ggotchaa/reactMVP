import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, FormLabel, MenuItem, Modal, Stack, Tab, Tabs, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { form_msg } from '../../../utils/constants';
import React from 'react';

type UppasswordFormProps = {
  handlers: {
    // Add any required handlers here if needed
  };
};

const UppasswordForm: React.FC<UppasswordFormProps> = ({ handlers }) => {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: '',
    },
    validationSchema: yup.object().shape({
      username: yup.string().required(form_msg.REQUIRED),
    }),
    async onSubmit(values, { resetForm }) {
      console.log(values);

      try {
        // todo
        // await updateAct(values).unwrap();
        // onClose();
        // resetForm();
      } catch (err) {
		const error = err as Error;
        alert(error.message);
        // enqueueSnackbar(error.data.message, {variant: 'error'});
      }
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h2" component="h2" sx={{ mb: 4 }}>
        delete
      </Typography>

      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <span>todo update password</span>
      </Box>
    </form>
  );
};

export default UppasswordForm;
