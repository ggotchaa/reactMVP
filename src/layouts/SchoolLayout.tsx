import {Outlet, useLocation} from 'react-router-dom';
import {Box, Container} from '@mui/material';

import theme from '../styles/theme';
import Header from '../components/Header/Header';
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer/Footer';

const SchoolLayout: React.FC = () => {
	const {pathname} = useLocation();

	const showSideBar = !pathname.endsWith('/create');

	return (
		<Box component='main' sx={{display: 'flex'}}>
			<Box sx={{flex: 1, minHeight: '100vh', backgroundColor: theme.palette.background.default}}>
				<Header />

				<Container sx={{display: 'flex', position: 'relative', p: '40px !important', height: `calc(100% - 84px - 44px)`}}>
					{showSideBar && <SideMenu />}

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: '24px',
							ml: showSideBar ? '24px' : 0,
							width: `calc(100% - ${showSideBar ? '310px - 24px' : '0px'})`,
						}}>
						<Outlet />
					</Box>
				</Container>

				<Footer />
			</Box>
		</Box>
	);
};

export default SchoolLayout;
