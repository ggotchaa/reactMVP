import { Stack, TextField } from '@mui/material';
import BoxCard from '../../../components/BoxCard';

interface School {
  name: string;
  address: string;
}

interface SchoolBlockProps {
  index: number;
  value: School;
  touched?: any; // Replace with the actual type of 'touched'
  error?: any; // Replace with the actual type of 'error'
  editMode: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SchoolBlock: React.FC<SchoolBlockProps> = ({ index, value, touched, error, editMode, handleChange }) => {
  return (
    <BoxCard title={'Сведения школы ' + (index + 1)}>
      <Stack direction={'row'} gap={2}>
        <TextField
          name={`schools[${index}].name`}
          value={value.name}
          label='Название школы'
          placeholder='Введите название'
          error={Boolean(touched?.[index] && error) || false}
          helperText={(touched?.[index] && error) || false}
          onChange={handleChange}
          disabled={editMode === 0}
        />

        <TextField
          name={`schools[${index}].address`}
          value={value.address}
          label='Фактический адрес'
          placeholder='Введите адрес'
          error={Boolean(touched?.[index] && error) || false}
          helperText={(touched?.[index] && error) || false}
          onChange={handleChange}
          disabled={editMode === 0}
        />
      </Stack>
    </BoxCard>
  );
};

export default SchoolBlock;
