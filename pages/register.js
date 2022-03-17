
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import logo from '../public/assets/logo.png'
import Image from 'next/image'
import { Typography } from "@material-ui/core"
import Button from '@mui/material/Button'
import useStyles from '../styles/pages/registerStyles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormLabel } from '@mui/material';



function register() {

    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Enter your registered email and get code");
        }
    }


    return (

        <>
            <Container maxWidth="sm" style={{ padding: '10px' }}>
                <div align="center">
                    <Image src={logo}
                        width={275}
                        height={200}
                        priority={true}

                    />
                </div>

                <div style={{ marginTop: '50px' }}>
                    <Typography gutterBottom variant="h5">Login your account</Typography>
                    <form onSubmit={(e) => e.preventDefault()}>
                        {
                            emailError ?
                                <p style={{ color: '#D35E3C' }}>{emailError}</p> :
                                ''
                        }
                        <Box style={{ marginTop: '50px' }}
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                        >

                            <TextField fullWidth={true} onChange={handleEmail} id="standard-basic" label="Email Address" variant="standard" />




                        </Box>

                        <Button style={{


                            position: 'relative',
                            marginTop: '100%',
                            marginLeft: '2px'

                        }} fullWidth={true} variant="rounded">Get Code</Button>

                    </form>
                </div>

            </Container>



        </>
    )
}

export default register