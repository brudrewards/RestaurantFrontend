import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import ModifierCard from '../layouts/components/modifier/modifierCard'
import modifierCard1 from '../public/assets/modifierCard1.png'
import modifierCard2 from '../public/assets/modifierCard2.png'
import modifierCard3 from '../public/assets/modifierCard3.png'
import NoFood from '../public/assets/noFood.png'
import { Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useForm } from "react-hook-form";
import MenuItem from '@mui/material/MenuItem';
import * as FiIcons from 'react-icons/fi'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import Image from 'next/image'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Modifier = () => {
    const [size, setSize] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);




    const handleSize = (event) => {
        setSize(event.target.value);
        console.log(size)

    };


    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = values => console.log(values);


    return (
        <Container maxWidth="md">




            <Tabs

                sx={{ marginBottom: 5 }}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >


                <Tab label={<ModifierCard img={modifierCard1} />} />
                <Tab label={<ModifierCard img={modifierCard2} />} />
                <Tab label={<ModifierCard img={modifierCard3} />} />
                <Tab label={<ModifierCard img={modifierCard1} />} />
                <Tab label={<ModifierCard img={modifierCard2} />} />
                <Tab label={<ModifierCard img={modifierCard3} />} />


            </Tabs>


            <Typography variant="h6">Modifier</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid sx={{ marginTop: 3 }} container spacing={3}>


                    <Grid item xs={8} md={9} lg={9}>
                        <FormControl variant="standard" sx={{ minWidth: "100%" }}>
                            <InputLabel id="demo-simple-select-standard-label">Size</InputLabel>
                            <Select {
                                ...register("size", {
                                    required: true
                                })
                            }
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={size}
                                onChange={handleSize}
                                label="size"
                            >

                                <MenuItem value="sm">SM</MenuItem>
                                <MenuItem value="md">MD</MenuItem>
                                <MenuItem value="lg">LG</MenuItem>
                            </Select>
                            <Typography sx={{ color: '#D35E3C' }} variant="body2">{errors.size && <span>Please Input Size</span>}</Typography>
                        </FormControl>

                    </Grid>


                    <Grid sx={{ marginTop: 2 }} item xs={1} md={1} lg={1}>
                        <Button variant="rounded">Edit</Button>
                    </Grid>
                    <Grid sx={{
                        marginTop: 2, marginLeft: {
                            xs: 5,
                            md: 1,
                            lg: 1
                        }
                    }} item xs={1} md={1} lg={1}>
                        <Button onClick={handleOpen}><FiIcons.FiTrash style={{ width: '25px', height: '25px' }} /></Button>

                    </Grid>



                </Grid>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Box sx={{ marginLeft: "auto", marginRight: 'auto' }}>
                            <Image src={NoFood}
                                width={350}
                                height={350}
                                priority={true}

                            />
                            <Typography variant="p">
                                Are you sure you want to delete the modifier?
                            </Typography>

                            <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 2 }}>
                                <Button onClick={handleClose} sx={{ backgroundColor: '#E5E5E5', color: 'black' }} variant="rounded">Cancel</Button>
                                <Button variant="rounded">Delete</Button>
                            </Box>
                        </Box>

                    </Box>
                </Modal>









            </form>




        </Container>
    )
}

export default Modifier