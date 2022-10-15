import PageHeaderBar from "./PageHeaderBar";
import PageBottomBar from "./PageBottomBar";
import { Box } from '@mui/material';

const Layout = (props: { children: JSX.Element }) => {
    return (
        <Box sx={{position: 'relative'}}>
            <PageHeaderBar></PageHeaderBar>
            <Box sx={{ backgroundColor: 'secondary.main', height:56 }}></Box>
            <div>{props.children}</div>
            <Box sx={{ backgroundColor: 'secondary.main', height:56, display: {sx: 'block', md: 'none'} }}></Box>
            <PageBottomBar></PageBottomBar>
        </Box>
    )
}

export default Layout;