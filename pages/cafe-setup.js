
import React from 'react';
import Container from '@mui/material/Container';
import CafeShop from '../public/assets/cafeShop.png'
import Image from 'next/image'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";






const Register = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = data => console.log(data);
    console.log(watch("example")); // watch input value by passing the name of it






    return (

        <>
            <Container maxWidth="sm" style={{ padding: '10px' }}>

                <div style={{ marginTop: '25px' }} align="center">
                    <Typography sx={{
                        fontWeight: 'bold'
                    }} gutterBottom variant="h3">Set up Cafe</Typography>
                    <br />

                    <Typography sx={{

                    }} gutterBottom variant="h6">Step 1 of 4</Typography>

                    <Image src={CafeShop} alt="cafe-shop"
                        width={150}
                        height={150}
                        priority={true}

                    />


                </div>

                <div style={{ marginTop: '50px' }}>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Box style={{ marginTop: '50px' }}

                            sx={{
                                padding: "16px"
                            }}
                            noValidate
                            autoComplete="off"
                        >

                            <TextField {
                                ...register("restaurant", {
                                    required: true
                                })
                            } fullWidth={true} id="standard-basic" label="Restaurant Name" variant="standard" name="restaurant" />
                            <Typography sx={{ color: '#D35E3C' }} variant="body2">{errors.restaurant && <span>Please Input Restaurant Name</span>}</Typography>
                            <TextField {
                                ...register("manager", {
                                    required: true
                                })
                            } style={{ marginTop: '40px' }} fullWidth={true} id="standard-basic" label="Manger Full Name" variant="standard" name="manager" />
                            <Typography sx={{ color: '#D35E3C' }} variant="body2">{errors.manager && <span>Please provide Manager Name</span>}</Typography>
                            <TextField {
                                ...register("phone", {
                                    required: true
                                })
                            } style={{ marginTop: '40px' }} fullWidth={true} id="standard-basic" label="Phone Number" variant="standard" name="phone" />
                            <Typography sx={{ color: '#D35E3C' }} variant="body2">{errors.phone && <span>Please provide Phone Number</span>}</Typography>





                            <Button style={{



                                marginTop: '100px',


                            }} fullWidth={true} type="submit" variant="rounded">Continue</Button>


                        </Box>



                    </form>
                </div>

            </Container>



        </>
    )
}

export default Register