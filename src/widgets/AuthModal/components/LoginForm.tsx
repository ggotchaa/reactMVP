import { useState } from "react";
import { Box, Button, Tab, Tabs, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { form_msg } from "../../../utils/constants";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { loginCall } from "../../../services/useEndpoint";
import { useNavigate } from "react-router-dom";
import { useModalContext } from "../../../contexts/ModalContext";

interface LoginFormProps {
  handlers: {
    nextStep: (step: string) => void;
  };
}

const LoginForm: React.FC<LoginFormProps> = ({ handlers }) => {
  const [aLoginType, setLoginType] = useState<string>("loginpass");
  const [isPasswordView, setPasswordView] = useState<boolean>(true);
  const {setOpen} = useModalContext();


  const navigate = useNavigate();

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      login: yup.string().required(form_msg.REQUIRED),
      password: yup.string().required(form_msg.REQUIRED),
    }),
    onSubmit: (values) => {
      try {
        const { login, password } = values;
        loginCall(login, password)
          .then((data) => {
            // Check if the data is not false, which means successful login
            if (data) {
              // Perform actions for successful login, e.g., redirect to a new page
              console.log("Login successful:", data);
              setOpen(false);
              navigate('/school/profile');
            } else {
              // Handle login failure, e.g., show an error message
              console.log("Login failed. Please check your credentials.");
            }
          })
          .catch((error) => {
            // Handle any errors that occurred during the login process
            console.error("An error occurred during login:", error);
          });
      } catch (error) {
        // Handle any errors that occurred during the login process
        console.error("An error occurred during login:", error);
      }
    },
  });

  //login with eds todo

  return (
    <>
      <Typography variant="h2" component="h2">
        Вход в систему
      </Typography>

      <Typography
        component="span"
        sx={{ mt: 2, mb: 4, padding: "0 16px", textAlign: "center" }}
      >
        Выберите способ входа в Финансовый центр
      </Typography>

      <Box sx={{ width: "100%", mb: 4 }}>
        <Tabs
          value={aLoginType}
          onChange={(e, v) => setLoginType(v)}
          variant="fullWidth"
          aria-label="wrapped label tabs example"
        >
          <Tab value="loginpass" label="Логин и пароль" />
          <Tab value="byfile" label="ЭЦП" />
        </Tabs>
      </Box>

      <form onSubmit={handleSubmit}>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
          {aLoginType === "loginpass" ? (
            <>
              <TextField
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "24px",
                }}
                name="login"
                value={values.login}
                label="Логин"
                placeholder="Введите ИИН или БИН"
                error={Boolean(touched.login && errors.login) || false}
                helperText={(touched.login && errors.login) || false}
                onChange={handleChange}
              />

              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginBottom: "32px",
                }}
              >
                <TextField
                  name="password"
                  value={values.password}
                  label="Пароль"
                  placeholder="Введите пароль"
                  type={!isPasswordView ? "text" : "password"}
                  error={Boolean(touched.password && errors.password) || false}
                  helperText={(touched.password && errors.password) || false}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <Button
                        onClick={() => setPasswordView(!isPasswordView)}
                        variant="text"
                      >
                        {!isPasswordView ? <Visibility /> : <VisibilityOff />}
                      </Button>
                    ),
                  }}
                />

                <Button
                  sx={{ marginTop: "12px" }}
                  variant="text"
                  onClick={() => handlers.nextStep("passrecovery")}
                >
                  Забыли пароль?
                </Button>
              </Box>

              <Button
                sx={{ flex: 1 }}
                type="submit"
                disabled={!values.login && !values.password}
              >
                Войти
              </Button>
            </>
          ) : (
            <>
              {/* <Button variant='contained' component='label'>
								Выбрать сертификат
								<input type='file' accept='.sgn,.sig,.p7s,.pdf' hidden onChange={loginInByFile} />
							</Button> */}
            </>
          )}
        </Box>
      </form>
    </>
  );
};

export default LoginForm;