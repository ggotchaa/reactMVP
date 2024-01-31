import {
  Box,
  Button,
  Card,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { registerUser } from "../../../services/useEndpoint";

import { form_msg } from "../../../utils/constants";

type RegistrationFormProps = {
  handlers: {
    nextStep: (arg?: string) => void;
    backStep: () => void;
  };
};

const RegistrationForm: React.FC<RegistrationFormProps> = ({ handlers }) => {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      login: "",
      password: "",
      repeatPassword: "",
      role_id: "",
      organization_name: "",
      official_number: "",
      email_address: "",
      phone_number: "",
    },
    validationSchema: yup.object().shape({
      login: yup.string().required(form_msg.REQUIRED),
      password: yup
        .string()
        .required(form_msg.REQUIRED)
        .min(6, form_msg.MIN_LENGTH()),
      repeatPassword: yup
        .string()
        .test("passwords-match", "Пароли должны совпадать", function (value) {
          return this.parent.password === value;
        }),
      role_id: yup.string().required(form_msg.REQUIRED),
      organization_name: yup.string().required(form_msg.REQUIRED),
      official_number: yup.string().required(form_msg.REQUIRED),
      email_address: yup
        .string()
        .email(form_msg.EMAIL)
        .required(form_msg.REQUIRED),
      phone_number: yup.string().required(form_msg.REQUIRED),
    }),
    async onSubmit(values, { resetForm }) {
      try {
        // Call the registerUser function with the form values
        const success = await registerUser(values);
        if (success) {
          // Registration successful, update state or perform any actions you need
          console.log("Registration successful!");
          // You can perform actions like showing a success message or redirecting the user.
        } else {
          // Registration failed, show an error message or handle it accordingly
          console.log("Registration failed. Please try again.");
          // You can show an error message to the user or handle it as per your requirements.
        }
      } catch (error) {
        console.error("An error occurred during registration:", error);
      }
      resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h2" component="h2" sx={{ mb: 4 }}>
        Регистрация
      </Typography>

      <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h5"
          component="span"
          sx={{ mb: "12px", textTransform: "uppercase" }}
        >
          Данные для регистрации
        </Typography>
        <Card variant="outlined" sx={{ p: "24px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="role_id"
                value={values.role_id}
                sx={{ flexBasis: "100%" }}
                label="Выберите роль"
                error={Boolean(touched.role_id && errors.role_id) || false}
                helperText={(touched.role_id && errors.role_id) || false}
                onChange={(event) => {
                  // Convert the role_id value to an integer based on the selected option
                  const { value } = event.target;
                  const roleIdValue = value === "school" ? 1 : 0;

                  handleChange({
                    target: {
                      name: "role_id",
                      value: roleIdValue,
                    },
                  });
                }}
                select
              >
                <MenuItem value={"school"}>Школа</MenuItem>
                {/* <MenuItem value={'investor'}>Инвестор</MenuItem> */}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="organization_name"
                value={values.organization_name}
                //sx={{ width: "auto", flexGrow: 1 }}
                label="Название Организации"
                placeholder="Введите название"
                error={
                  Boolean(
                    touched.organization_name && errors.organization_name
                  ) || false
                }
                helperText={
                  (touched.organization_name && errors.organization_name) ||
                  false
                }
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="official_number"
                value={values.official_number}
                //sx={{ width: "auto", flexGrow: 1 }}
                label="БИН"
                placeholder="БИН"
                error={
                  Boolean(touched.official_number && errors.official_number) ||
                  false
                }
                helperText={
                  (touched.official_number && errors.official_number) || false
                }
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="email_address"
                value={values.email_address}
                //sx={{ width: "auto", flexGrow: 2 }}
                label="Электронная почта"
                placeholder="Введите электронную почту"
                error={
                  Boolean(touched.email_address && errors.email_address) ||
                  false
                }
                helperText={
                  (touched.email_address && errors.email_address) || false
                }
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="phone_number"
                value={values.phone_number}
                //sx={{ width: "auto", flexGrow: 2 }}
                label="Номер Телефона"
                placeholder="Номер Телефона"
                error={
                  Boolean(touched.phone_number && errors.phone_number) || false
                }
                helperText={
                  (touched.phone_number && errors.phone_number) || false
                }
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Card>

        <Typography
          variant="h5"
          component="span"
          sx={{ mt: "24px", mb: "12px", textTransform: "uppercase" }}
        >
          Логин и пароль
        </Typography>
        <Card variant="outlined" sx={{ p: "24px" }}>
          <Stack direction="row" gap={2}>
            <TextField
              name="login"
              value={values.login}
              label="Логин"
              placeholder="Введите ИИН или БИН"
              error={Boolean(touched.login && errors.login) || false}
              helperText={(touched.login && errors.login) || false}
              onChange={handleChange}
            />

            <TextField
              name="password"
              value={values.password}
              label="Пароль"
              placeholder="Введите пароль"
              error={Boolean(touched.password && errors.password) || false}
              helperText={(touched.password && errors.password) || false}
              onChange={handleChange}
              type="password"
            />
            <TextField
              name="repeatPassword"
              value={values.repeatPassword}
              label="Повторите пароль"
              placeholder="Повторите пароль"
              error={
                Boolean(touched.repeatPassword && errors.repeatPassword) ||
                false
              }
              helperText={
                (touched.repeatPassword && errors.repeatPassword) || false
              }
              onChange={handleChange}
              type="password"
            />
          </Stack>
        </Card>

        <Stack direction="row" gap={2} sx={{ mt: "32px", width: "100%" }}>
          <Button
            variant="outlined"
            sx={{ flex: 1 }}
            onClick={handlers.backStep}
          >
            Отмена
          </Button>
          <Button sx={{ flex: 1 }} type="submit">
            Зарегистрироваться
          </Button>
        </Stack>
      </Box>
    </form>
  );
};

export default RegistrationForm;
