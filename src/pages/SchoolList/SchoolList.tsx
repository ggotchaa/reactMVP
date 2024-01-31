import BoxTitle from '../../components/BoxTitle';
import { useState } from 'react';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import SchoolBlock from './components/SchoolBlock';

interface School {
  name: string;
  address: string;
}

interface SchoolListProps {
  // Add any props if required
}

const SchoolList: React.FC<SchoolListProps> = (props) => {
  const [editMode, setEditMode] = useState(0);

  const { values, errors, touched, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: {
      schools: [
        { name: 'школа тест 1', address: 'улица пушкина' },
        { name: 'школа тест 2', address: 'дом колотушкина' },
      ],
    },
    validationSchema: yup.object().shape({
      // Add validation schema as needed
    }),
    async onSubmit(values, { resetForm }) {
      console.log(values);

      try {
        // todo: Implement your form submission logic
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

  const handlers = {
    changeEditMode: () => {
      if (editMode) resetForm();
      setEditMode(editMode === 0 ? 1 : 0);
    },
    saveNewData: () => {
      handleSubmit();
      setEditMode(0);
    },
  };

  return (
    <>
      <BoxTitle title={'Мои школы'}>
        {editMode === 0 ? (
          <>
            <Button onClick={handlers.changeEditMode}>Редактировать</Button>
          </>
        ) : (
          <>
            <Button variant='outlined' onClick={handlers.changeEditMode}>
              Отменить
            </Button>
            <Button onClick={handlers.saveNewData}>Сохранить</Button>
          </>
        )}
      </BoxTitle>

      {values.schools.map((value: School, key: number) => (
        <SchoolBlock
          key={key + value.address}
          index={key}
          value={value}
          touched={touched.schools?.[key] || {}}
          error={errors.schools?.[key] || {}}
          editMode={editMode}
          handleChange={handleChange}
        />
      ))}
    </>
  );
};

export default SchoolList;
