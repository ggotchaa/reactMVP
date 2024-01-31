import React, { ChangeEvent } from 'react';
import {FormikErrors, FormikTouched } from 'formik';
import {Button, Grid, IconButton, Stack, TextField, Typography } from '@mui/material';
import { FileUploadOutlined } from '@mui/icons-material';
import BoxCard from '../../../components/BoxCard';

interface FormValues {
  signer_fullname: string;
  signer_official_number: string;
  organization_name: string;
  official_number: string;
  official_address: string;
  actual_address: string;
}

interface FormikProp {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  handleChange: (e: ChangeEvent<any>) => void;
  handleBlur: (e: any) => void;
  values: FormValues;
  touched: FormikTouched<FormValues>;
  errors: FormikErrors<FormValues>;
}

interface DeclarationStep1Props {
  formik: FormikProp;
}

const DeclarationStep1: React.FC<DeclarationStep1Props> = ({ formik }) => {
	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
	};
  return (
    <form id="declarations_step_1" onSubmit={formik.handleSubmit}>
      <Stack direction={"column"} spacing={3}>
        <BoxCard title={"Подписант"}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                name="signer_fullname"
                value={formik.values.signer_fullname}
                label="signer_fullname"
                placeholder="signer_fullname"
                error={
                  Boolean(
                    formik?.touched?.signer_fullname &&
                      formik?.errors?.signer_fullname
                  ) || false
                }
                helperText={
                  (formik?.touched?.signer_fullname &&
                    formik?.errors?.signer_fullname) ||
                  false
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="signer_official_number"
                value={formik.values.signer_official_number}
                label="signer_official_number"
                placeholder="signer_official_number"
                error={
                  Boolean(
                    formik?.touched?.signer_official_number &&
                      formik?.errors?.signer_official_number
                  ) || false
                }
                helperText={
                  (formik?.touched?.signer_official_number &&
                    formik?.errors?.signer_official_number) ||
                  false
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography typography={"h52"} sx={{ mb: "6px" }}>
                Доверенность в pdf формате
              </Typography>
              <Button
                sx={{ padding: "0 30px" }}
                variant="text"
                component="label"
                startIcon={<>{"ICO"}</>}
              >
                Загрузить (макс 10 МВ)
                <input
                  type="file"
                  accept=".pdf"
                  hidden
                  onChange={handleFileChange}
                />
              </Button>
            </Grid>

            <Grid item xs={12}>
              <TextField
                // variant='standard'
                type="text"
                InputProps={{
                  endAdornment: (
                    <IconButton component="label">
                      <FileUploadOutlined />
                      <input
                        style={{ display: "none" }}
                        type="file"
                        hidden
                        onChange={handleFileChange}
                        name="[licenseFile]"
                      />
                    </IconButton>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </BoxCard>

        <BoxCard title={"Сведения об организации"}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                name="organization_name"
                value={formik.values.organization_name}
                label="organization_name"
                placeholder="organization_name"
                error={
                  Boolean(
                    formik?.touched?.organization_name &&
                      formik?.errors?.organization_name
                  ) || false
                }
                helperText={
                  (formik?.touched?.organization_name &&
                    formik?.errors?.organization_name) ||
                  false
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="official_number"
                value={formik.values.official_number}
                label="official_number"
                placeholder="official_number"
                error={
                  Boolean(
                    formik?.touched?.official_number &&
                      formik?.errors?.official_number
                  ) || false
                }
                helperText={
                  (formik?.touched?.official_number &&
                    formik?.errors?.official_number) ||
                  false
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="official_address"
                value={formik.values.official_address}
                label="official_address"
                placeholder="official_address"
                error={
                  Boolean(
                    formik?.touched?.official_address &&
                      formik?.errors?.official_address
                  ) || false
                }
                helperText={
                  (formik?.touched?.official_address &&
                    formik?.errors?.official_address) ||
                  false
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="actual_address"
                value={formik.values.actual_address}
                label="actual_address"
                placeholder="actual_address"
                error={
                  Boolean(
                    formik?.touched?.actual_address &&
                      formik?.errors?.actual_address
                  ) || false
                }
                helperText={
                  (formik?.touched?.actual_address &&
                    formik?.errors?.actual_address) ||
                  false
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="organization_name"
                value={formik.values.organization_name}
                label="organization_name"
                placeholder="organization_name"
                error={
                  Boolean(
                    formik?.touched?.organization_name &&
                      formik?.errors?.organization_name
                  ) || false
                }
                helperText={
                  (formik?.touched?.organization_name &&
                    formik?.errors?.organization_name) ||
                  false
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="organization_name"
                value={formik.values.organization_name}
                label="organization_name"
                placeholder="organization_name"
                error={
                  Boolean(
                    formik?.touched?.organization_name &&
                      formik?.errors?.organization_name
                  ) || false
                }
                helperText={
                  (formik?.touched?.organization_name &&
                    formik?.errors?.organization_name) ||
                  false
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>
          </Grid>
        </BoxCard>

        <BoxCard title={"Контактные данные"}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                name="official_address"
                value={formik.values.official_address}
                label="official_address"
                placeholder="official_address"
                error={
                  Boolean(
                    formik?.touched?.official_address &&
                      formik?.errors?.official_address
                  ) || false
                }
                helperText={
                  (formik?.touched?.official_address &&
                    formik?.errors?.official_address) ||
                  false
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="actual_address"
                value={formik.values.actual_address}
                label="actual_address"
                placeholder="actual_address"
                error={
                  Boolean(
                    formik?.touched?.actual_address &&
                      formik?.errors?.actual_address
                  ) || false
                }
                helperText={
                  (formik?.touched?.actual_address &&
                    formik?.errors?.actual_address) ||
                  false
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>
          </Grid>
        </BoxCard>
      </Stack>
    </form>
  );
};

export default DeclarationStep1;
