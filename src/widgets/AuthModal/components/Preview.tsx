import { Button, Stack, Typography } from '@mui/material';

type PreviewProps = {
  handlers: {
    nextStep: (arg?: string) => void;
  };
};

const Preview: React.FC<PreviewProps> = ({ handlers }) => {
  return (
    <>
      <Typography variant="h2" component="h2">
        Вход в систему
      </Typography>

      <Typography
        component="span"
        sx={{ mt: 2, mb: 4, padding: '0 16px', textAlign: 'center' }}
      >
        Уважаемый клиент, необходимо выбрать способ входа в Финансовый центр
      </Typography>

      <Stack sx={{ '> button': { width: 240 } }} direction={'row'} spacing={2}>
        <Button variant="contained" onClick={() => handlers.nextStep()}>
          Войти
        </Button>
        {/* <Button variant='secondary'>Secondary</Button> */}
        <Button variant="outlined" onClick={() => handlers.nextStep('register')}>
          Зарегистрироваться
        </Button>
      </Stack>
    </>
  );
};

export default Preview;
