import { BottomNavigation, BottomNavigationAction, Paper, Box } from "@mui/material"
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';

// const styles = makeStyles(theme => ({
//     toolbar: theme.mixins.toolbar
// })

const PageBottomBar = () => {
    return (
        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: {xs: 'block', md: 'none'} }}>
            <BottomNavigation
                showLabels
                sx={{ backgroundColor: 'primary.main' }}
            >
                <BottomNavigationAction label="MHFAs" icon={ <PeopleIcon /> } />
                <BottomNavigationAction label="Resources" icon={ <ArticleIcon /> }/>
            </BottomNavigation>
        </Box>
    );
}

export default PageBottomBar;