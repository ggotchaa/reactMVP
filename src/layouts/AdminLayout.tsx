import {Outlet} from 'react-router-dom';
import {Box, Container} from '@mui/material';

//import Header from '../components/Header/Header';

import {useState} from 'react';
import AdminMenu from '../components/AdminMenu';

const AdminLayout = ()=>{
	const [sideBarState, setSideBarState] = useState(1);

	const contentOffsetOfMenu = sideBarState === 0 ? '0px' : sideBarState === 1 ? '310px' : '50px';

	return (
		<Container component='main' sx={{display: 'flex', minHeight: '100vh', position: 'relative'}}>
			{!sideBarState ? null : <AdminMenu state={sideBarState} />}

			<Box sx={{display: 'flex', minHeight: '100vh'}}>
				{/* <Header /> */}

				<Box>
					<Outlet />
				</Box>
			</Box>
		</Container>
	);
};

export default AdminLayout;

