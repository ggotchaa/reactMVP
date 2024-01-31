import {Box, Card, Typography, BoxProps} from '@mui/material';
import React, { ReactNode } from 'react';

interface BoxCardProps extends BoxProps {
	title: string;
	subTitle?: string;
	children?: ReactNode;
	sx?: any;
	sxTitle?: any;
	sx2?: any;
}

const BoxCard: React.FC<BoxCardProps> = ({title, subTitle, children, sx, sxTitle, sx2, ...rest}) => {
	return (
		<Box sx={{display: 'flex', flexDirection: 'column', width: '100%', ...sx}} {...rest}>
			<Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mb: '12px', ...sxTitle}}>
				<Typography variant='h5' sx={{textTransform: 'uppercase'}}>
					{title}
				</Typography>
			</Box>

			<Card elevation={0} sx={{display: 'flex', flexDirection: 'column', width: '100%', padding: '24px', ...sx2}}>
				{!subTitle ? null : (
					<>
						<Typography variant='h5' sx={{mb: '16px'}}>
							{subTitle}
						</Typography>
					</>
				)}
				{children}
			</Card>
		</Box>
	);
};

export default BoxCard;
