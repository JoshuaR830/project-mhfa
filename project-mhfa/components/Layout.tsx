import React from 'react';
import PageHeaderBar from './PageHeaderBar';
import PageBottomBar from './PageBottomBar';
import { Box } from '@mui/material';

const Layout = (props: { children: JSX.Element }) => {
    return (
        <Box sx={{position: 'relative', minHeight: '100vh'}}>
            <PageHeaderBar></PageHeaderBar>
            <Box sx={{display: 'flex', justifyContent: 'center', backgroundColor: 'primary.50', minHeight: '100vh'}}>
                <Box sx={{mt: '88px', mb: '88px', mr: 4, ml: 4, width: '700px', maxWidth: '100vw'}}>{props.children}</Box>
            </Box>
            <PageBottomBar></PageBottomBar>
        </Box>
    );
};

export default Layout;