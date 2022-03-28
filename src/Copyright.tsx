import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from "./Link";

export default function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
            {'Copyright © '}
            <Link color="inherit" href="https://6971.productions">
                Music Studio Hard
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
