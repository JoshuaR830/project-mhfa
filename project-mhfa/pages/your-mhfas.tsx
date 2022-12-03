import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/Layout';
import LocationChip from '../components/LocationChip';
import { Box, Typography, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import ProfileCard from '../components/ProfileCard';

interface mhfaObjects {
    firstName: string
    surname: string
    description: string
    iconSrc: string
    office: string
}

const YourMhfas: NextPage = () => {
    const [mhfaData, setMhfaData] = useState<mhfaObjects[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [selectedOffice, setSelectedOffice] = useState('');

    useEffect(() => {
        setLoading(true);

        fetch('https://s3.eu-west-2.amazonaws.com/mhfa.joshuarichardson.dev/resources/people.json')
            .then((res) => {
                console.log(res);
                res.json().then((data) => {
                    setMhfaData(data);
                    setLoading(false);
                });})
            .catch(error => console.log(error));
    }, []);

    function manageSelection(office: string): void {
        if (office == selectedOffice) {
            setSelectedOffice('');
            return;
        }

        setSelectedOffice(office);
    }

    return (
        <Layout>
            <Box>
                <Typography variant='h2' sx={{ textAlign: 'center' }}>Your MHFAs</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <LocationChip office='Nottingham' selectedOffice={selectedOffice} callback={manageSelection}></LocationChip>
                    <LocationChip office='London' selectedOffice={selectedOffice} callback={manageSelection}></LocationChip>
                    <LocationChip office='Sydney' selectedOffice={selectedOffice} callback={manageSelection}></LocationChip>
                </Box>
                {isLoading?
                    <Box>Loading...</Box>:
                    mhfaData.length == 0 ?
                        <Box>No MHFAs available</Box> :
                        <Container sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                            {mhfaData.filter(word => word.office.includes(selectedOffice)).map(x => <ProfileCard key={x.firstName} iconSrc={x.iconSrc} firstName={x.firstName} surname={x.surname} description={x.description} office={x.office} />)}
                        </Container>
                }
            </Box>
        </Layout>
    );
};

export default YourMhfas;