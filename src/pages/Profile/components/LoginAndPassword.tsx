import { ChangeEvent, FC } from 'react';
import { Stack, TextField } from '@mui/material';
import BoxCard from '../../../components/BoxCard';

interface Props {
  values: {
    login: string;
    password: string;
  };
  touched: {
    login?: boolean;
    password?: boolean;
  };
  errors: {
    login?: string;
    password?: string;
  };
  editMode: number;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const LoginAndPassword: FC<Props> = ({values, touched, errors, editMode, handleChange}) => {
  return (
    <BoxCard title={'Логин и пароль'}>
      <Stack direction={'row'} gap={2}>
        <TextField
          name='login'
          value={values.login}
          label='Логин'
          placeholder='Введите ИИН или БИН'
          error={Boolean(touched.login && errors.login) || false}
          helperText={(touched.login && errors.login) || false}
          onChange={handleChange}
          disabled={editMode === 0}
        />

        <TextField
          name='password'
          value={values.password}
          type='password'
          label='Пароль'
          placeholder='Введите пароль'
          error={Boolean(touched.password && errors.password) || false}
          helperText={(touched.password && errors.password) || false}
          onChange={handleChange}
          disabled={editMode === 0}
        />
      </Stack>
    </BoxCard>
  );
};

export default LoginAndPassword;
