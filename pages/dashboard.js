import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Week from '../layouts/components/dashboard/Week'
import ManageOrder from '../layouts/components/dashboard/ManageOrder'
import Summary from '../layouts/components/dashboard/Summary'
import Earnings from '../layouts/components/dashboard/Earnings'





const Dashboard = () => {
    return (
        <>
            <Container sx={{
                marginTop: 5
            }} maxWidth="lg">
                <Grid container sx={{ marginTop: 2 }}>
                    <Grid item xs={12} lg={12}>
                        <Typography variant="h4">Dashboard</Typography>
                        {/* <Week /> */}
                    </Grid>
                </Grid>
                <Grid container sx={{ marginTop: 2 }}>

                    <Typography variant="h4">Orders Summary</Typography>
                    <Summary />

                </Grid>

                <Grid container sx={{ marginTop: 2 }} spacing={2}>
                    <Earnings />


                </Grid>

                <Grid container spacing={0}>
                    <ManageOrder />
                </Grid>



            </Container>



        </>
    )
}

export default Dashboard