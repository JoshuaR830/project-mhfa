import React from 'react';
import { Button, Box, Card, CardMedia, Typography, CardContent, CardActions, Avatar } from '@mui/material';

const ContactInfoCard = (prop: {imageSrc: string, name: string, role: string, office: string}) => {
    return (
        <Card sx={{ maxWidth: 344, m:2, borderRadius: '0 16px 16px 16px' }}>
            <CardMedia component="img" height="194" image={prop.imageSrc} alt="practice image"></CardMedia>

            <CardContent>
                <Box sx={{display: 'flex'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <Avatar></Avatar>
                    </Box>
                    <Box sx={{pl: 2}}>
                        <Typography variant="h5" color="text.secondary">{prop.name}</Typography>
                        <Typography variant="body2" color="text.secondary">{prop.role}</Typography>
                        <Typography variant="body2" color="text.secondary">{prop.office}</Typography>
                    </Box>
                </Box>
            </CardContent>
            <CardActions>
                <Button size="small">Contact</Button>
            </CardActions>
        </Card>
    );
};

export default ContactInfoCard;