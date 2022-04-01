import React from 'react'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import Image from 'next/image'
import Divider from '@mui/material/Divider';

const DayTimeCard = ({ day, open, close, img }) => {
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 2
            }}>
                <Box>
                    <Image src={img}
                        width={41}
                        height={41}
                        priority={true}

                    />

                </Box>
                <Box sx={{ textAlign: "justify" }}>
                    <Typography variant="p">{day}</Typography>
                    <br />
                    <Typography variant="p"> {open}-{close} </Typography>
                </Box>

                <Box sx={{
                    justifyContent: "flex-end",


                }}>
                    <Button sx={{
                        width: '80%',
                        marginTop: '9px'

                    }} variant="rounded"><Typography variant="body2">Change</Typography></Button>
                </Box>

            </Box>
            <Divider variant="middle" />


        </>
    )
}

export default DayTimeCard