import React from 'react';
import PageHeaderBar from './PageHeaderBar';
import PageBottomBar from './PageBottomBar';
import { Box } from '@mui/material';

const Layout = (props: { children: JSX.Element }) => {
    return (
        <Box sx={{position: 'relative', height: '100%'}}>
            <PageHeaderBar></PageHeaderBar>
            <Box sx={{display: 'flex', justifyContent: 'center', backgroundColor: 'primary.50', height: '100%'}}>
                <Box sx={{mt: '88px', mb: '88px', mr: 4, ml: 4, maxWidth: 600}}>{props.children}</Box>
            </Box>
            <PageBottomBar></PageBottomBar>
        </Box>
    );
};

export default Layout;