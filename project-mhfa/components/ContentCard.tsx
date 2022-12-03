import React from 'react';
import { Button, Card, CardMedia, Typography, CardContent, CardActions } from '@mui/material';

const ContentCard = (prop: {imageSrc: string, title: string, text: string}): JSX.Element => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="194" image={prop.imageSrc} alt="practice image"></CardMedia>
            <CardContent>
                <Typography variant="h5" color="text.secondary">{prop.title}</Typography>
                <Typography variant="body2" color="text.secondary">{prop.text}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Do something</Button>
            </CardActions>
        </Card>
    );
};

export default ContentCard;