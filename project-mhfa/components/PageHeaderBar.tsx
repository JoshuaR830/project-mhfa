import { Container, AppBar, Toolbar, Typography, Menu, MenuItem, Button, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home"
import Link from "next/link";
import { useRouter } from "next/router";

const pages = [{name: 'Home', link: '/'}, {name: 'MHFAs', link: '/your-mhfas'}, {name: 'Resources', link: '/resources'}]


const PageHeaderBar = () => {
    const router = useRouter();
    return (
        <AppBar>
            <Container>
                <Toolbar>
                    <HomeIcon/>
                    <Typography variant="h6" noWrap component="a" href="/">UNiDAYS Mental Health Hub</Typography>
                    {/* Do something different on mobile */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'end'} }}>
                        {pages.map((page) => (
                            <Button sx={{ml: 2}} variant='contained' color={(page.link != router.pathname ? 'secondary' : 'primary')} component={Link} key={page.name} href={page.link}>
                                {page.name}
                            </Button>))
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default PageHeaderBar;