import React from 'react'
import Tabs from './Tabs'
import NewOrders from './NewOrders'
import OrderCard from './OrderCard'
import Donut from './Donut'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';


const Summary = () => {
    return (
        <>
            <Grid container>
                <Grid item lg={8}><Typography variant="body2">Lorem ipsum dolor, sit amet consectetur?</Typography></Grid>

                <Grid item sx={{ margin: 'auto' }} lg={4}><Tabs /></Grid>



            </Grid>
            <Grid container>

                <Grid item lg={12}><NewOrders /></Grid>

            </Grid>


            <Grid container spacing={2}>
                <Grid item xs={12} md={2} lg={2} >
                    <OrderCard maxWidth={true} number={12} type="New" />
                </Grid>
                <Grid item xs={12} md={2} lg={2}>
                    <OrderCard number={18} type="Open" />
                </Grid>
                <Grid item xs={12} md={2} lg={2}>
                    <OrderCard number={7} type="Closed" />
                </Grid>

            </Grid>

            <Grid sx={{ marginTop: 7, }} container spacing={0}>

                <Grid item xs={2}>
                    <Donut />
                </Grid>

                <Grid item sx={{
                    margin: 'auto',
                    color: "#A4B0BE",
                    marginLeft: {
                        xs: 1,
                        lg: 5
                    }
                }} xs={3}>

                    <Typography variant="body2">New Orders</Typography>
                    <Typography variant="body2">Open Orders</Typography>
                    <Typography variant="body2">Close Orders</Typography>


                </Grid>
                <Grid item sx={{ margin: 'auto' }} xs={5}>
                    <LinearProgress sx={{ marginTop: "8px" }} value={80} variant="determinate" title="test" />
                    <LinearProgress sx={{ marginTop: "17px" }} value={80} variant="determinate" title="test" />
                    <LinearProgress sx={{ marginTop: "16px" }} value={80} variant="determinate" title="test" />
                </Grid>






            </Grid>


        </>
    )
}

export default Summary