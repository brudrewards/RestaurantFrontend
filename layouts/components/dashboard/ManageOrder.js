import React from "react";
import Frap from "../../../public/assets/frap.png";
import Button from "@mui/material/Button";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const ManageOrder = () => {
  return (
    <>
      <Grid item xs={5} lg={4}>
        <Image src={Frap} width={180} height={200} />
      </Grid>
      <Grid item sx={{ margin: "auto" }} xs={3} lg={4}>
        <Typography
          sx={{
            fontSize: {
              xs: ".9rem",
              md: "1.5rem",
              lg: "1.5rem",
            },
          }}
          variant="h4"
        >
          Manage Menu
        </Typography>
        <Typography
          sx={{
            color: "#A4B0BE",
            fontSize: {
              xs: ".6rem",
              md: "1rem",
              lg: "1rem",
            },
          }}
          variant="body2"
        >
          Check the items in your menu card
        </Typography>
      </Grid>
      <Grid item sx={{ margin: "auto" }} xs={3} lg={4}>
        <Button
          sx={{
            marginLeft: {
              xs: 3,
              md: 10,
              lg: 20,
            },
            height: {
              xs: "40px",
              md: "40px",
              lg: "40px",
            },
            width: {
              xs: "80px",
              md: "100px",
              lg: "130px",
            },
          }}
          variant="rounded"
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: {
                xs: ".5rem",
                lg: ".8rem",
              },
            }}
          >
            Add Items
          </Typography>
        </Button>
      </Grid>
    </>
  );
};

export default ManageOrder;
