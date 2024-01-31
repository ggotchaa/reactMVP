import { ReactNode } from 'react';
import Header from '../components/Header/Header';


interface LayoutProps {
  //children: ReactNode;
}
const Layout: React.FC<LayoutProps> = () => {
  return (
    <>
      <Header/>
    </>
    
  );
};

export default Layout;
