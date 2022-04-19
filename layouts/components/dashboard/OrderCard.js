import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const OrderCard = ({ number, type }) => {
    return (
        <>

            <Paper sx={{ height: "100px", width: '100%', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} variant="outlined">

                <Box marginLeft={1}>
                    <Typography variant="h4">
                        {number}

                    </Typography>
                    <Typography variant="body2">
                        {type} Orders

                    </Typography>
                </Box>
            </Paper>


        </>
    )
}

export default OrderCard