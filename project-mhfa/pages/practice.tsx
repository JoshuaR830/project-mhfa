import React from 'react';
import type { NextPage } from 'next';
import ContentCard from '../components/ContentCard';


const Practice:NextPage = () => {
    return (
        <div>
            <ContentCard imageSrc='/static/images/bluebells.jpg' title='Some Title' text='Some description'></ContentCard>
            <ContentCard imageSrc='/static/images/bluebells.jpg' title='Some Title' text='Some description'></ContentCard>
        </div>
    );
};

export default Practice;