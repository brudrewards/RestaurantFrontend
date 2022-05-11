import React from 'react'
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';


const AddItem = () => {
    const [category, setCategory] = React.useState('');

    const [value, setValue] = React.useState('vegan');

    const handleRadio = (event) => {
        setValue(event.target.value);
    };

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    return (
        <Container maxWidth="lg">
            <Grid container>
                <Grid item>
                    <Typography variant="h6">
                        Add Item
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={4}>
                <Grid item xs={6} md={6} lg={6}>
                    <TextField sx={{ width: '100%' }} id="standard-basic" label="Item Name" variant="standard" />
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                    <TextField sx={{ width: '100%' }} id="standard-basic" label="Product Type" variant="standard" />
                </Grid>
            </Grid>

            <Grid container sx={{ marginTop: 1 }} spacing={4}>

                <Grid item xs={6} md={6} lg={6}>
                    <FormControl variant="standard" sx={{ minWidth: "100%" }}>
                        <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                        <Select
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
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                    <TextField sx={{ width: '100%' }} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} id="standard-basic" label="Price" variant="standard" />

                </Grid>

            </Grid>

            <Grid sx={{ marginTop: 4 }} container>
                <Grid item xs={12} md={12} lg={12}>
                    <TextField sx={{ width: '100%' }} id="standard-basic" label="Description" variant="standard" />

                </Grid>
            </Grid>

            <Grid sx={{ marginTop: 4 }} container>
                <Grid item>
                    <FormControl>

                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={value}
                            onChange={handleRadio}
                        >
                            <FormControlLabel value="vegan" control={<Radio />} label="Vegan" />
                            <FormControlLabel value="nonVegan" control={<Radio />} label="Non-Vegan" />


                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid sx={{ marginTop: 4 }} container>
                <Grid sx={{ marginLeft: 'auto', marginRight: 'auto' }} item xs={12} md={6}>
                    <Button fullWidth={true} type="submit" variant="rounded">Done</Button>

                </Grid>
            </Grid>

        </Container>
    )
}

export default AddItem