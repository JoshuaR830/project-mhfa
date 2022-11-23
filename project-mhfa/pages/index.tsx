import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layout';
import { Box } from '@mui/material';
import ResourceLink from '../components/ResourceLink';
import ContactInfoCard from '../components/ContactInfoCard';
import { Button } from '@mui/material';
import { Divider } from '@mui/material';
import { Typography } from '@mui/material';
import { flexbox } from '@mui/system';
import Link from 'next/link';

const Home:NextPage = () => {
    return (
        <Layout>
            <Box>
              <Typography variant="h5" sx={{ textAlign: 'center' }} color="text.secondary">Do you wish to speak to a Mental Health First Aider?</Typography>
              <Box sx={{display: 'flex', justifyContent: 'space-around', padding: 4}}>
                <Button component={Link} variant='contained' href='/your-mhfas'>Yes</Button>
                <Button component={Link} variant='outlined' href='/resources'>No</Button>
              </Box>
              <Divider />
              <Typography variant="h4" sx={{ textAlign: 'center' }} color="text.secondary">Your MHFAs</Typography>
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                <ContactInfoCard imageSrc='https://s3.eu-west-2.amazonaws.com/mhfa.joshuarichardson.dev/resources/images/bluebells.jpg' name='Gareth Davies' role='Head of IT & Security' office='Nottingham'></ContactInfoCard>
                <ContactInfoCard imageSrc='https://s3.eu-west-2.amazonaws.com/mhfa.joshuarichardson.dev/resources/images/bluebells.jpg' name='Tom Sterrett' role='Partner Product Manager' office='Nottingham'></ContactInfoCard>
              </Box>
              <Divider />
              <Typography variant="h4" sx={{ textAlign: 'center' }} color="text.secondary">External Resources</Typography>
              <ResourceLink href='https://www.samaritans.org/' linkTitle='The Samaritans' linkDescription='Providers of support to anyone in emotional distress, struggling to cope or at risk of suicide' imageSrc='data:image/png;base64,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'></ResourceLink>
                <ResourceLink href='https://mind.org.uk/' linkTitle='Mind' linkDescription='Fighting for mental health. For support. For respect. For you.' imageSrc='https://mind.org.uk/assets/images/Mind_Squiggle_Wordmark_Blue_RGB.png'></ResourceLink>
                <ResourceLink href='https://www.turning-point.co.uk/' linkTitle='Turning Point' linkDescription='Turning Point are experts in delivering innovative integrated care in communities, specialising in substance misuse, mental health, learning disability, employment services, criminal justice, primary care and public health. ' imageSrc='https://www.turning-point.co.uk/content/published/api/v1.1/assets/CONT16548D539F294BBA9E663A7CC3C97CB3/native?cb=_cache_56af&channelToken=47e3a0548347438fb099d946454e1247'></ResourceLink>
                <ResourceLink href='https://www.papyrus-uk.org/papyrus-hopelineuk/' linkTitle='Hopeline UK' linkDescription='A safe space to talk through struggles that may impact your own safety or the safety of others' imageSrc='https://www.papyrus-uk.org/wp-content/uploads/2018/07/logo.png'></ResourceLink>
            </Box>
        </Layout>
    )
}

export default Home;