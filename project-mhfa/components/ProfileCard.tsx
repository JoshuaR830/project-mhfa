import React from 'react';
import { Card, Box, Typography, Avatar, Chip } from '@mui/material';
import getColor from '../helpers/ChipHelper';

const imageLocation = 'https://s3.eu-west-2.amazonaws.com/mhfa.joshuarichardson.dev/resources/images/';



export default function ProfileCard(prop: { iconSrc: string, firstName: string, surname: string, description: string, office: string }): JSX.Element {
    return (
        <Card sx={{ borderRadius: '0 16px 16px 16px', m: 2, p: 2, position: 'relative', display: 'inline-block', height: '180px', width: '180px', flexBasis: '180px', flexGrow: '0', flexShrink: '0' }}>
            <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
                <Avatar src={imageLocation + prop.iconSrc} sx={{ mr: 2}}></Avatar>
                <Box>
                    <Typography variant='h5' color='text.secondary'>{prop.firstName}</Typography>
                    <Typography variant='h5' color='text.secondary'>{prop.surname}</Typography>
                </Box>
            </Box>
            <Typography variant='body2' color='text.secondary' sx={{ mt:1 }}>{prop.description}</Typography>
            <Chip size='small' label={prop.office} sx={{ position: 'absolute', bottom:8, right:8, '&.MuiChip-root':{ backgroundColor: getColor(prop.office) }}}/>
        </Card>
    );
}