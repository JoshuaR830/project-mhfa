import { Chip } from '@mui/material';
import React from 'react';
import getColor from '../helpers/ChipHelper';

interface OfficeInterface {
    // eslint-disable-next-line no-unused-vars
    (office:string):void;
}

export default function LocationChip(prop: {office: string, selectedOffice: string, callback:OfficeInterface}): JSX.Element {
    return (
        <Chip
            sx={{ flex: '1 1 0px', maxWidth: '140px', m:2, '&.MuiChip-outlined':{ borderColor: getColor(prop.office) }, '&.MuiChip-filled':{ backgroundColor: getColor(prop.office) } }}
            label={prop.office} variant={prop.selectedOffice == prop.office ? 'filled' : 'outlined'}
            onClick={() => prop.callback(prop.office)} />
    );
}