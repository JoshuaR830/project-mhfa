import React from 'react';
import PageHeaderBar from './PageHeaderBar';
import PageBottomBar from './PageBottomBar';
import PageSideBar from './PageSideBar';
import { Box } from '@mui/material';

const Layout = (props: { children: JSX.Element }) => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', backgroundColor: 'primary.50', minHeight: '100vh'}}>
            <PageHeaderBar></PageHeaderBar>
            <PageSideBar></PageSideBar>
            <Box sx={{ display: 'flex', mt: '88px', mb: '88px' }}>{props.children}</Box>
            <PageBottomBar></PageBottomBar>
        </ Box>
    );
};

export default Layout;