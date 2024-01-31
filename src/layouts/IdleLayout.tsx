import {Outlet} from 'react-router-dom';
import {Box, Container} from '@mui/material';

import theme from '../styles/theme';
//import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const AuthLayout = ()=>{
	return (
		<Box component='main' sx={{display: 'flex'}}>
			<Box sx={{flex: 1, minHeight: '100vh', backgroundColor: theme.palette.background.default}}>
				{/* <Header /> */}

				<Container
					sx={{
						position: 'relative',
						py: 2.5,
						px: 5,
						height: `calc(100% - 44px)`,
					}}>
					<Outlet />
				</Container>

				<Footer />
			</Box>
		</Box>
	);
};

export default AuthLayout;
