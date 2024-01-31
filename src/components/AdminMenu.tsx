import {Link, useMatch} from 'react-router-dom';
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {Mail} from '@mui/icons-material';
import React from 'react';

interface MenuItem {
	path: string;
	text: string;
	icon: React.ReactElement;
}

interface AdminMenuProps {
	state: number;
}

const menuItems: MenuItem[] = [
	{path: '/declarations', text: 'Заявления', icon: <Mail />},
	{path: '/management', text: 'Управление контентом', icon: <Mail />},
	{path: '/users', text: "Пользователи", icon: <Mail />},
	{path: '/roles', text: 'Роли', icon: <Mail />},
	{path: '/guide', text: 'Справочники', icon: <Mail />},
];

const AdminMenuItem: React.FC<MenuItem> = ({path, text, icon})=>{
	const match = useMatch({path: '/admin' + path, end: path.length === 1});

	return (
		<ListItem disablePadding>
			<ListItemButton to={'/admin' + path} component={Link} selected={Boolean(match)}>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText primary={text} />
			</ListItemButton>
		</ListItem>
	);
};

const AdminMenu: React.FC<AdminMenuProps> = ({state})=>{
	return (
		<List sx={{width: '310px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
			{menuItems.map((item)=>(
				<AdminMenuItem key={item.path} {...item} />
			))}
		</List>
	);
};

export default AdminMenu;
