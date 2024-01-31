import React from 'react';
import { Stack, Typography } from '@mui/material';
import theme from '../../styles/theme';

const Footer: React.FC = () => {
  return (
    <><Stack
    sx={{
      justifyContent: 'center',
      alignItems: 'center',
      position: 'sticky',
      bottom: '0',
      padding: '15px 0px',
      background: theme.palette.primary.main,
    }}
  >
    <Typography
      sx={{
        //color: theme.palette.other.footerColor,
        userSelect: 'none',
        fontSize: '12px',
        lineHeight: '14px',
        textTransform: 'uppercase',
      }}
    >
      © 2023 Финансовый центр
    </Typography>
  </Stack></>
    
  );
};

export default Footer;
