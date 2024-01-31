import { useNavigate } from 'react-router-dom';
import BoxCard from '../../components/BoxCard';
import BoxTitle from '../../components/BoxTitle';
import { Button } from '@mui/material';
import MagicTable from '../../components/MagicTable';
import React from 'react';

interface SchoolDeclarationsProps {
  // todo: add props
}

const SchoolDeclarations: React.FC<SchoolDeclarationsProps> = (props) => {
  const navigate = useNavigate();

  const handlers = {
    proceedToReport: () => {
      navigate('/school/declarations/create');
    },
  };

  return (
    <>
      <BoxTitle title={'Мои заявления'}>
        <Button onClick={handlers.proceedToReport}>Подать заявление</Button>
      </BoxTitle>

      <BoxCard title={'Данных таблица блин'} subTitle={'Заполните все графы таблицы, если ячейки не заполнены'}>
        <MagicTable />
      </BoxCard>
    </>
  );
};


export default SchoolDeclarations;
