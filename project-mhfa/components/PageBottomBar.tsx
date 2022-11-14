import { BottomNavigation, BottomNavigationAction, Paper, Box, Drawer, IconButton, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";
import { CSSObject, styled, Theme } from '@mui/material/styles';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import theme from "../config/theme";
import { blue } from "@mui/material/colors";

// const styles = makeStyles(theme => ({
//     toolbar: theme.mixins.toolbar
// })

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
}));

const PageBottomBar = () => {
    const [value, setValue] = React.useState(0);
    const [drawerState, setDrawerState] = React.useState(false);

    const toggleDrawerState = () => {
        console.log(drawerState);
        setDrawerState(!drawerState);
    }

    const openedMixin = (theme: Theme): CSSObject => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen 
        }),
        width: 100,
        overflowX: 'hidden'
    })

    const closedMixin = (theme: Theme): CSSObject => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: 0
    })

    return (
        <>
            <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: {xs: 'block', md: 'none'} }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        console.log(newValue)
                        setValue(newValue);
                    }}
                    sx={{ '& .MuiButtonBase-root':{ color: 'grey.500'}, '& .MuiButtonBase-root.Mui-selected': {color: 'grey.800'}, '& .MuiButtonBase-root.Mui-selected > .MuiSvgIcon-root': { width: 50, borderRadius: 3, backgroundColor: 'primary.100' } }}
                    >
                    <BottomNavigationAction component="a" LinkComponent={Link} href="/" label="Home" icon={ <HomeIcon /> } />
                    <BottomNavigationAction component="a" href="/your-mhfas" LinkComponent={Link} label="MHFAs" icon={ <PeopleIcon /> } />
                    <BottomNavigationAction component="a" href="/resources" LinkComponent={Link} label="Resources" icon={ <ArticleIcon /> }/>
                </BottomNavigation>
            </Box>
            <Box sx={{display: {xs: 'none', md: 'flex'} }}>
                <Drawer variant='permanent' open={drawerState} sx={{flexShrink: 0, whiteSpace: 'no-wrap', boxSizing: 'border-box'}}>
                    {/* , ...(drawerState && {
                    ...openedMixin(theme), '& .MuiDrawer-paper': openedMixin(theme)
                }) */}
                    <DrawerHeader>
                        <IconButton onClick={toggleDrawerState}>
                            <HomeIcon />
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton sx={{justifyContent: drawerState ? 'initial' : 'center', px: 2.5}}>
                                <ListItemIcon sx={{minWidth: 0, mr: drawerState ? 3 : 'auto', justifyContent: 'center'}}><HomeIcon /></ListItemIcon>
                                <ListItemText primary={'Hello'} sx={{ opacity: drawerState ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </List>

                </Drawer>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        console.log(newValue)
                        setValue(newValue);
                    }}
                    // https://mui.com/material-ui/customization/how-to-customize/
                    sx={{ backgroundColor: 'secondary.main', '& .MuiBottomNavigationAction-root':{ color: 'blue'}, '& .Mui-selected': {color: 'red'} }}
                    >
                    <BottomNavigationAction component="a" LinkComponent={Link} href="/" label="Home" icon={ <HomeIcon /> } />
                    <BottomNavigationAction component="a" LinkComponent={Link} href="/your-mhfas" label="MHFAs" icon={ <PeopleIcon /> } />
                    <BottomNavigationAction component="a" LinkComponent={Link} href="/resources" label="Resources" icon={ <ArticleIcon /> }/>
                </BottomNavigation>
            </Box>
        </>
    );
}

export default PageBottomBar;