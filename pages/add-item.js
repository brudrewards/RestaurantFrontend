import React from 'react'
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import Image from 'next/image'
import ImgUpload from '../public/assets/imgUpload.png'


const AddItem = () => {
    const [category, setCategory] = React.useState('');


    const handleChange = (event) => {
        setCategory(event.target.value);
    };


    // Validations
    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = values => console.log(values);
    return (
        <Container maxWidth="lg">

            <Grid container>
                <Grid item>
                    <Typography gutterBottom variant="h6">
                        Add Item
                    </Typography>
                </Grid>
            </Grid>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                    <Grid sx={{
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }} item xs={12} md={6} lg={6}>
                        <Box sx={{
                            border: '1px dashed grey',
                            borderRadius: '10px',
                            width: '100%',
                            height: {
                                xs: 150,
                                md: 200,
                                lg: 200,
                            },
                            backgroundColor: '#FBFBFB',


                        }}>
                            <Box sx={{
                                marginTop: {
                                    xs: 3,
                                    md: 5,
                                    lg: 5

                                }
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <Image src={ImgUpload} alt="image-upload"
                                        width={60}
                                        height={60}
                                        priority={true}

                                    />


                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <Button sx={{
                                        marginTop: 1
                                    }}
                                        variant="rounded"
                                        component="label"
                                    >
                                        Upload
                                        <input
                                            type="file"
                                            hidden
                                        />
                                    </Button>


                                </Box>

                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={6} md={6} lg={6}>
                        <TextField {
                            ...register("itemName", {
                                required: true
                            })
                        } sx={{ width: '100%' }} id="standard-basic" label="Item Name" variant="standard" name="itemName" />
                        <Typography sx={{ color: '#D35E3C' }} variant="body2">{errors.itemName && <span>Please Input Item Name</span>}</Typography>
                    </Grid>
                    <Grid item xs={6} md={6} lg={6}>
                        <TextField {
                            ...register("productType", {
                                required: true
                            })
                        } sx={{ width: '100%' }} id="standard-basic" label="Product Type" variant="standard" name="productType" />
                        <Typography sx={{ color: '#D35E3C' }} variant="body2">{errors.productType && <span>Please Input Product Type</span>}</Typography>
                    </Grid>
                </Grid>

                <Grid container sx={{ marginTop: 1 }} spacing={4}>

                    <Grid item xs={6} md={6} lg={6}>
                        <FormControl variant="standard" sx={{ minWidth: "100%" }}>
                            <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                            <Select {
                                ...register("category", {
                                    required: true
                                })
                            }
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={category}
                                onChange={handleChange}
                                label="category"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="coffee">Coffee</MenuItem>
                                <MenuItem value="tea">Tea</MenuItem>
                                <MenuItem value="food">Food</MenuItem>
                            </Select>
                            <Typography sx={{ color: '#D35E3C' }} variant="body2">{errors.category && <span>Please Input Category Type</span>}</Typography>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} md={6} lg={6}>
                        <TextField {
                            ...register("price", {
                                required: true
                            })
                        } sx={{ width: '100%' }} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} id="standard-basic" label="Price" variant="standard" />
                        <Typography sx={{ color: '#D35E3C' }} variant="body2">{errors.price && <span>Please Input Price</span>}</Typography>
                    </Grid>

                </Grid>

                <Grid sx={{ marginTop: 4 }} container>
                    <Grid item xs={12} md={12} lg={12}>
                        <TextField {
                            ...register("desc", {
                                required: true
                            })
                        } sx={{ width: '100%' }} id="standard-basic" label="Description" variant="standard" />
                        <Typography sx={{ color: '#D35E3C' }} variant="body2">{errors.desc && <span>Please Input Description</span>}</Typography>
                    </Grid>
                </Grid>

                <Grid sx={{ marginTop: 4 }} container>
                    <Grid item xs={3}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="GMO" />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={3}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Dairy" />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={3}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Kosher" />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={3}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="GF" />
                        </FormGroup>
                    </Grid>
                </Grid>
                <Grid sx={{ marginTop: 4 }} container>
                    <Grid sx={{ marginLeft: 'auto', marginRight: 'auto' }} item xs={12} md={6}>
                        <Button fullWidth={true} type="submit" variant="rounded">Done</Button>

                    </Grid>
                </Grid>
            </form>

        </Container>
    )
}

export default AddItem