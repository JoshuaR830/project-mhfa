import React from 'react';
import { Box, Drawer, Toolbar, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';

export default function PageSideBar(): JSX.Element {
    return (
        <>
            <Drawer variant='permanent' sx={{width: 240, display: {xs: 'none', md: 'block'}, flexShrink: 0, ['& .MuiDrawer-paper']: { width: 240, boxSizing: 'border-box' }}}>
                <Toolbar />
                <Box sx={{overflow: 'auto'}}>
                    <List>
                        <ListItem>
                            <ListItemButton component={Link} href='/'>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText>Home</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton component={Link} href='/your-mhfas'>
                                <ListItemIcon>
                                    <PeopleIcon />
                                </ListItemIcon>
                                <ListItemText>MHFAs</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton component={Link} href='/resources'>
                                <ListItemIcon>
                                    <ArticleIcon />
                                </ListItemIcon>
                                <ListItemText>Resources</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
}