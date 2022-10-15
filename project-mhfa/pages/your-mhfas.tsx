import { NextPage } from 'next'
import ContactInfoCard from '../components/ContactInfoCard';
import Layout from '../components/Layout';
import { Box, Typography, Container } from '@mui/material';

const YourMhfas:NextPage = () => {
    return (
        <Layout>
            <Box>
                <Typography variant='h2' sx={{ textAlign: 'center' }}>Your MHFA&apos;s</Typography>
                <Container sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <ContactInfoCard imageSrc='/static/images/bluebells.jpg' name='Gareth Davies' role='Head of IT & Security' office='Nottingham'></ContactInfoCard>
                    <ContactInfoCard imageSrc='/static/images/bluebells.jpg' name='Ryan Jardine' role='Strategic Account Manager' office='London'></ContactInfoCard>
                    <ContactInfoCard imageSrc='/static/images/bluebells.jpg' name='Tom Sterrett' role='Partner Product Manager' office='Nottingham'></ContactInfoCard>
                    <ContactInfoCard imageSrc='/static/images/bluebells.jpg' name='Kate Wareham' role='Partner Development Director' office='Sydney'></ContactInfoCard>
                </Container>
            </Box>
        </Layout>
    )
}

export default YourMhfas;