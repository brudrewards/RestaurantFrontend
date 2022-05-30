import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Dot from "../../../public/assets/dot.png";

const NewOrders = () => {
  return (
    <>
      <Grid item>
        <Box
          sx={{
            backgroundColor: "#E25730",
            borderRadius: "5px",
          }}
        >
          <Typography sx={{ color: "#fff", padding: 2 }} variant="p">
            12
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Typography
          sx={{
            fontStyle: "bold",
          }}
          marginLeft={2}
          variant="p"
        >
          New Orders
        </Typography>
      </Grid>
      <Grid item sx={{ marginLeft: 2 }}>
        <Image src={Dot} width={7} height={7} />
      </Grid>
      <Grid
        item
        sx={{
          marginLeft: "auto",
        }}
      >
        <Button
          sx={{
            height: "25px",
          }}
          variant="text"
        >
          <Typography variant="p"> Manage Orders</Typography>
        </Button>
      </Grid>
    </>
  );
};

export default NewOrders;
