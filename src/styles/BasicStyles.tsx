import {GlobalStyles, alpha} from '@mui/material';
import theme from './theme';

const BaseStyles = ()=>{
	return (
		<GlobalStyles
			styles={{
				'body, #root, .bodya': {width: '100%', minHeight: '100vh'},

				'body, * >': {
					'&::-webkit-scrollbar': {width: 4, height: 4},
					'&::-webkit-scrollbar-track': {backgroundColor: 'transparent'},
					'&::-webkit-scrollbar-thumb': {backgroundColor: 'transparent'},

					'&:hover::-webkit-scrollbar-track, &::-webkit-scrollbar-track:hover': {backgroundColor: alpha(theme.palette.background.paper, 1)},
					'&:hover::-webkit-scrollbar-thumb, &::-webkit-scrollbar-thumb:hover': {backgroundColor: alpha(theme.palette.primary.main, 1)},
				},
			}}
		/>
	);
};

export default BaseStyles;

