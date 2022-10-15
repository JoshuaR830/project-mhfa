import { Container, AppBar, Toolbar, Typography, Menu, MenuItem, Button, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home"

const pages = ['MHFAs', 'Resources']


const PageHeaderBar = () => {
    const doThing = () => {

    }

    return (
        <AppBar>
            <Container>
                <Toolbar>
                    <HomeIcon/>
                    <Typography variant="h6" noWrap component="a" href="/">UNiDAYS Mental Health Hub</Typography>
                    {/* Do something different on mobile */}
                    <Box sx={{ flexGrow: 1, display: {xxs: 'none', md: 'flex'} }}>
                        {pages.map((page) => (
                            <Button variant='contained' color='secondary' key={page} onClick={doThing}>
                                {page}
                            </Button>))
                        }
                        </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default PageHeaderBar;