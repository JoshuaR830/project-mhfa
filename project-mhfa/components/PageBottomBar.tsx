import { BottomNavigation, BottomNavigationAction, Paper, Box, Drawer, IconButton, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import { useRouter } from "next/router";

var pages = [{ href: '/', icon: <HomeIcon />, label: 'Home' }, { href: '/your-mhfas', icon: <PeopleIcon />, label: 'MHFAs' }, { href: '/resources', icon: <ArticleIcon />, label: 'Resources' }]

const PageBottomBar = () => {
    const router = useRouter();
    const [value, setValue] = React.useState(pages.findIndex(x => x.href == router.pathname));

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
                    { pages.map(x => <BottomNavigationAction key={x.href} component={Link} href={x.href} label={x.label} icon={x.icon} />) }
                </BottomNavigation>
            </Box>
        </>
    );
}

export default PageBottomBar;