import {Button, Stack} from '@mui/material';
import {useModalContext} from '../../contexts/ModalContext';
import {useEffect} from 'react';

interface AuthPageProps {
  state: any; // finish typing
}

const AuthPage: React.FC<AuthPageProps> = ({state: routerStateReq}) => {
  const {modalOpen} = useModalContext();

  useEffect(() => {
    modalOpen(routerStateReq);
  }, [routerStateReq]);

  return (
    <Stack direction={'column'} gap={4}>
      <Button onClick={()=>modalOpen('')}>Точка нулевая</Button>
      <Button onClick={()=>modalOpen(routerStateReq)}>Вход по юрл</Button>
      <Button onClick={()=>modalOpen('register')}>Точка регистрация</Button>
      <Button onClick={()=>modalOpen('uppassword')}>Точка обновления пароля</Button>
      <Button onClick={()=>modalOpen('passrecovery')}>Точка восстановление пароля</Button>
    </Stack>
  );
};

export default AuthPage;
