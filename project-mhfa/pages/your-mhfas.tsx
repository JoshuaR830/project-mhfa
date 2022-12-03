import React from 'react';
import { NextPage } from 'next';
import ContactInfoCard from '../components/ContactInfoCard';
import Layout from '../components/Layout';
import { Box, Typography, Container } from '@mui/material';
import { useEffect, useState } from 'react';

const YourMhfas: NextPage = () => {
    const [mhfaData, setMhfaData] = useState<any[]>([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('https://s3.eu-west-2.amazonaws.com/mhfa.joshuarichardson.dev/resources/data/people.json')
            .then((res) => {
                console.log(res);
                res.json().then((data) => {
                    setMhfaData(data);
                    setLoading(false);
                });})
            .catch(error => console.log(error));
    }, []);

    return (
        <Layout>
            <Box>
                <Typography variant='h2' sx={{ textAlign: 'center' }}>Your MHFAs</Typography>

                {isLoading?
                    <Box>Loading...</Box>:
                    mhfaData.length == 0 ?
                        <Box>No MHFAs available</Box> :
                        <Container sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                            {mhfaData.map(x => <ContactInfoCard key={x.name} imageSrc={x.imageSrc} name={x.name} role={x.role} office={x.office} />)}
                        </Container>
                }
            </Box>
        </Layout>
    );
};

export default YourMhfas;