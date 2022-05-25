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
import { Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useForm } from "react-hook-form";
import MenuItem from '@mui/material/MenuItem';

const Modifier = () => {
    const [size, setSize] = React.useState('');
    const [milk, setMilk] = React.useState('');
    const [extra, setExtra] = React.useState('');



    const handleSize = (event) => {
        setSize(event.target.value);
        console.log(size)

    };

    const handleMilk = (event) => {
        setMilk(event.target.value);
        console.log(Milk)

    };
    const handleExtra = (event) => {
        setExtra(event.target.value);


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
                <Grid sx={{ marginTop: 3 }} container>


                    <Grid item xs={12}>
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


                </Grid>



                <Grid sx={{ marginTop: 3 }} container>


                    <Grid item xs={12}>
                        <FormControl variant="standard" sx={{ minWidth: "100%" }}>
                            <InputLabel id="demo-simple-select-standard-label">Milk</InputLabel>
                            <Select {
                                ...register("milk", {
                                    required: true
                                })
                            }
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={milk}
                                onChange={handleMilk}
                                label="milk"
                            >

                                <MenuItem value="oat">Oat</MenuItem>
                                <MenuItem value="almond">Almond</MenuItem>
                                <MenuItem value="skim">Skim</MenuItem>
                            </Select>
                            <Typography sx={{ color: '#D35E3C' }} variant="body2">{errors.milk && <span>Please Input milk</span>}</Typography>
                        </FormControl>

                    </Grid>


                </Grid>






                <Grid sx={{ marginTop: 3 }} container>


                    <Grid item xs={12}>
                        <FormControl variant="standard" sx={{ minWidth: "100%" }}>
                            <InputLabel id="demo-simple-select-standard-label">Extras</InputLabel>
                            <Select {
                                ...register("extra", {
                                    required: true
                                })
                            }
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={extra}
                                onChange={handleExtra}
                                label="size"
                            >

                                <MenuItem value="1">Extra1</MenuItem>
                                <MenuItem value="2">Extra2</MenuItem>
                                <MenuItem value="3">Extra3</MenuItem>
                            </Select>
                            <Typography sx={{ color: '#D35E3C' }} variant="body2">{errors.extra && <span>Please Input Extra</span>}</Typography>
                        </FormControl>

                    </Grid>


                </Grid>
                <Grid sx={{ marginTop: 5 }} container>
                    <Grid sx={{ marginLeft: 'auto', marginRight: 'auto' }} item xs={12} md={6}>
                        <Button fullWidth={true} type="submit" variant="rounded">Add Modifier</Button>

                    </Grid>
                </Grid>
            </form>




        </Container>
    )
}

export default Modifier