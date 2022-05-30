import React from "react";
import Graph from "../../../public/assets/Graph.png";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Earnings = () => {
  return (
    <>
      <Grid item xs={6} md={6} lg={6}>
        <Typography
          sx={{
            fontSize: {
              xs: "1.5rem",
            },
          }}
          variant="h4"
        >
          Earnings Today
        </Typography>
        <Typography sx={{ fontWeight: "bold", marginTop: 2 }} variant="h2">
          $768
        </Typography>
        <Typography sx={{ color: "#A4B0BE", marginTop: 2 }} variant="h6">
          ($400 yesterday)
        </Typography>
      </Grid>
      <Grid
        item
        sx={{ display: "flex", flexDirection: "column" }}
        xs={6}
        md={6}
        lg={6}
      >
        <Typography sx={{ margin: "auto", color: "#E2612A" }} variant="h6">
          +8.5% <ArrowUpwardIcon />
        </Typography>
        <Image src={Graph} width={600} height={250} />
      </Grid>
    </>
  );
};

export default Earnings;
