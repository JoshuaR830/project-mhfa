import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/Layout';
import ResourceLink from '../components/ResourceLink';
import { Box } from '@mui/material';

const Resources: NextPage = () => {
    return (
        <Layout>
            <Box>
                <ResourceLink href='https://www.google.com' linkTitle='Google' linkDescription='A search engine' imageSrc='/static/images/bluebells.jpg'></ResourceLink>
                <ResourceLink href='https://www.google.com' linkTitle='Google' linkDescription='A search engine' imageSrc='/static/images/bluebells.jpg'></ResourceLink>
                <ResourceLink href='https://www.google.com' linkTitle='Google' linkDescription='A search engine' imageSrc='/static/images/bluebells.jpg'></ResourceLink>
            </Box>
        </Layout>
    )
}

export default Resources;