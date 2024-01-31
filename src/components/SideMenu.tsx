import {Link, useMatch} from 'react-router-dom';
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {Mail} from '@mui/icons-material';
import React from 'react';

interface MenuItem {
	path: string;
	text: string;
	icon: React.ReactElement;
}

const menuItems: MenuItem[] = [
	{path: '/profile', text: 'Профиль', icon: <Mail />},
	{path: '/schools', text: 'Мои школы', icon: <Mail />},
	{path: '/declarations', text: 'Мои заявления', icon: <Mail />},
	{path: '/notifications', text: 'Уведомления', icon: <Mail />},
	// {path: '/financing', text: 'Уведомления', icon: <Mail />},
];

const SideMenuItem: React.FC<MenuItem> = ({path, text, icon})=>{
	const match = useMatch({path: '/school' + path, end: path.length === 1});

	return (
		<ListItem disablePadding>
			<ListItemButton to={'/school' + path} component={Link} selected={Boolean(match)}>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText primary={text} />
			</ListItemButton>
		</ListItem>
	);
};

const SideMenu: React.FC = ()=>{
	return (
		<List sx={{width: '310px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
			{menuItems.map((item)=>(
				<SideMenuItem key={item.path} {...item} />
			))}
		</List>
	);
};

export default SideMenu;
