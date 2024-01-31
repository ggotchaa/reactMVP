import {Stack, TextField} from '@mui/material';
import BoxCard from '../../../components/BoxCard';
import {ChangeEvent, FC } from 'react';

// import cl from './HomePage.module.scss';

interface Props {
	values: {
	  bin_number: string;
	  phone_number: string;
	  legal_address: string;
	  actual_address: string;
	  directors_fullname: string;
	  director_inn: string;
	  email_address: string;
	  post_address: string;
	  email: string;
	};
	touched: {
	  bin_number?: boolean;
	  phone_number?: boolean;
	  legal_address?: boolean;
	  actual_address?: boolean;
	  directors_fullname?: boolean;
	  director_inn?: boolean;
	  email_address?: boolean;
	  post_address?: boolean;
	};
	errors: {
	  bin_number?: string;
	  phone_number?: string;
	  legal_address?: string;
	  actual_address?: string;
	  directors_fullname?: string;
	  director_inn?: string;
	  email_address?: string;
	  post_address?: string;
	};
	editMode: number;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
  

const OrganizationDetails: FC<Props> = ({ values, touched, errors, editMode, handleChange }) => {
	return (
		<BoxCard title={'Общие сведения'}>
			<Stack direction={'row'} sx={{flexWrap: 'wrap', '> *': {width: 'calc(50% - 12px) !important'}}} gap={'24px'}>
				<TextField
					name='bin_number'
					value={values.bin_number}
					sx={{width: 'auto'}}
					label='БИН fffffffffffff'
					placeholder='БИН'
					error={Boolean(touched.bin_number && errors.bin_number) || false}
					helperText={(touched.bin_number && errors.bin_number) || false}
					onChange={handleChange}
					disabled={editMode === 0}
				/>
				<TextField
					name='phone_number'
					value={values.phone_number}
					sx={{width: 'auto'}}
					label='Телефон'
					placeholder='Введите телефон'
					error={Boolean(touched.phone_number && errors.phone_number) || false}
					helperText={(touched.phone_number && errors.phone_number) || false}
					onChange={handleChange}
					disabled={editMode === 0}
				/>
				<TextField
					name='legal_address'
					value={values.legal_address}
					sx={{width: 'auto'}}
					label='Юридический адрес'
					placeholder='Введите адрес'
					error={Boolean(touched.legal_address && errors.legal_address) || false}
					helperText={(touched.legal_address && errors.legal_address) || false}
					onChange={handleChange}
					disabled={editMode === 0}
				/>
				<TextField
					name='actual_address'
					value={values.actual_address}
					sx={{width: 'auto'}}
					label='Фактический адрес'
					placeholder='Введите адрес'
					error={Boolean(touched.actual_address && errors.actual_address) || false}
					helperText={(touched.actual_address && errors.actual_address) || false}
					onChange={handleChange}
					disabled={editMode === 0}
				/>
				<TextField
					name='directors_fullname'
					value={values.email}
					sx={{width: 'auto'}}
					label='ФИО директора'
					placeholder='Введите данные'
					error={Boolean(touched.directors_fullname && errors.directors_fullname) || false}
					helperText={(touched.directors_fullname && errors.directors_fullname) || false}
					onChange={handleChange}
					disabled={editMode === 0}
				/>
				<TextField
					name='director_inn'
					value={values.director_inn}
					sx={{width: 'auto'}}
					label='ИНН директора'
					placeholder='Введите ИНН'
					error={Boolean(touched.director_inn && errors.director_inn) || false}
					helperText={(touched.director_inn && errors.director_inn) || false}
					onChange={handleChange}
					disabled={editMode === 0}
				/>
				<TextField
					name='email_address'
					value={values.email_address}
					sx={{width: 'auto'}}
					label='Электронная почта'
					placeholder='Введите электронную почту'
					error={Boolean(touched.email_address && errors.email_address) || false}
					helperText={(touched.email_address && errors.email_address) || false}
					onChange={handleChange}
					disabled={editMode === 0}
				/>
				<TextField
					name='post_address'
					value={values.post_address}
					sx={{width: 'auto'}}
					label='Почтовый адрес'
					placeholder='Введите почтовый адрес'
					error={Boolean(touched.post_address && errors.post_address) || false}
					helperText={(touched.post_address && errors.post_address) || false}
					onChange={handleChange}
					disabled={editMode === 0}
				/>
			</Stack>
		</BoxCard>
	);
};

export default OrganizationDetails;
