
import { useState, React } from 'react';
import Container from '@mui/material/Container';
import logo from '../public/assets/logo.png'
import Image from 'next/image'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';






const Register = () => {

    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Enter your registered email and get code");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log("submit");

    };


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
                    <Typography gutterBottom variant="h5">Login to your account</Typography>
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



                            marginTop: '100px',


                        }} fullWidth={true} onClick={handleSubmit} variant="rounded">Get Code</Button>

                    </form>
                </div>

            </Container>



        </>
    )
}

export default Register