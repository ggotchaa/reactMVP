import React from 'react';
import { useGlobalContext } from '../../contexts/GlobalContext';
import Routers from '../../basic/Routers';
import cl from './Content.module.scss';
import SideMenu from '../SideMenu';

const Content: React.FC = () => {
  const { state } = useGlobalContext();
  const { token, isAuthorized: isAuthorized2, isProd } = state;

  const isAuthorized = true;

  return (
    <div className={cl.wrapper}>
      {!isAuthorized ? null : <SideMenu />}
      <Routers />
    </div>
  );
};

export default Content;
