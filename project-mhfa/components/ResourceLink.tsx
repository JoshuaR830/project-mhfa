import React from "react";
import { Box, Avatar, Typography, Paper } from "@mui/material";
import Link from "next/link";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { red } from "@mui/material/colors";

const ResourceLink = (prop: {imageSrc: string, linkTitle: string, linkDescription: string, href: string}) => {
    return (
        <Paper sx={{ borderRadius: '0 16px 16px 16px', mt: 4, mb: 4, display: 'inline-block', width: '100%' }}>
            <a href={prop.href}>
                <Box sx={{display: 'flex', justifyContent: 'space-between', p: '8px'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <Avatar alt={`${prop.linkTitle} logo`} src={prop.imageSrc}></Avatar>
                    </Box>
                    <Box sx={{ml: 2, mr: 2}}>
                        <Typography>{prop.linkTitle}</Typography>
                        <Typography>{prop.linkDescription}</Typography>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <ArrowForwardRoundedIcon/>
                    </Box>
                </Box>
            </a>
        </Paper>
    )
}

export default ResourceLink;