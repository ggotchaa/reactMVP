import { Box, Stack, Typography, BoxProps } from '@mui/material';
import React, { ReactNode } from 'react';

interface BoxTitleProps extends BoxProps {
	title: string;
	children?: ReactNode;
}

const BoxTitle: React.FC<BoxTitleProps> = ({title, children}) => {
	return (
		<Box gap={'32px'} sx={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
			<Typography variant='h1'>{title}</Typography>

			<Stack gap={'16px'} direction={'row'}>
				{children}
			</Stack>
		</Box>
	);
};

export default BoxTitle;
