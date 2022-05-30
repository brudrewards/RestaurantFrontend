import React from "react";
import Tabs from "./Tabs";
import NewOrders from "./NewOrders";
import OrderCard from "./OrderCard";
import Donut from "./Donut";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";

const Summary = () => {
  return (
    <>
      <Grid container>
        <Grid sx={{ marginTop: 2 }} item lg={8}>
          <Typography sx={{ color: "#979B9F" }} variant="body2">
            Lorem ipsum dolor, sit amet consectetur?
          </Typography>
        </Grid>

        <Grid item sx={{ margin: "auto" }} lg={4}>
          <Tabs />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          backgroundColor: "#FDFAF8",
          padding: 2,
          display: "flex",
          marginTop: 2,
          marginBottom: 2,
        }}
        xs={12}
        md={12}
        lg={12}
      >
        <NewOrders />
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={2} lg={2}>
          <OrderCard maxWidth={true} number={12} type="New" />
        </Grid>
        <Grid item xs={12} md={2} lg={2}>
          <OrderCard number={18} type="Open" />
        </Grid>
        <Grid item xs={12} md={2} lg={2}>
          <OrderCard number={7} type="Closed" />
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: 7 }}>
        <Grid item xs={2} lg={2}>
          <Donut />
        </Grid>

        <Grid
          item
          sx={{
            margin: "auto",
            color: "#A4B0BE",
            marginLeft: {
              xs: 2,
              lg: 5,
            },
          }}
          xs={5}
          lg={2}
        >
          <Typography variant="body2">New Orders (15%)</Typography>
          <Typography variant="body2">Open Orders (15%) </Typography>
          <Typography variant="body2">Close Orders (15%) </Typography>
        </Grid>
        <Grid
          item
          sx={{
            margin: "auto",
          }}
          xs={3}
          lg={6}
        >
          <LinearProgress value={80} variant="determinate" title="test" />
          <LinearProgress
            sx={{ marginTop: "17px" }}
            value={80}
            variant="determinate"
            title="test"
          />
          <LinearProgress
            sx={{ marginTop: "18px" }}
            value={80}
            variant="determinate"
            title="test"
          />
        </Grid>

        <Grid
          item
          sx={{
            margin: "auto",
            color: "#A4B0BE",
          }}
          xs={1}
          lg={1}
        >
          <Typography variant="body2">12</Typography>
          <Typography variant="body2">18</Typography>
          <Typography variant="body2"> 07</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Summary;
