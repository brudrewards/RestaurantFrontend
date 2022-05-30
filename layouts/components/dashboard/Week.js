import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography } from "@mui/material";
import day from "dayjs";

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(day().get("D"));

  const handleChange = (event, newValue) => {
    setValue(newValue+1);
  };
  return (
    <>
      <Tabs
        value={value-1}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#D2603D",
            borderRadius: "5px",
            height: "100%",
            opacity: 0.8,
          },
        }}
      >
        {[...Array(31)].map((a, i) => (
          <Tab
            style={{ color: value-1 === i ? "white" : "" }}
            key={i}
            label={
              <>
                <Typography variant="p" sx={{
                    zIndex: 1,
                  }}>
                  {day().date(i+1).format("ddd")}
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    zIndex: 1,
                  }}
                >
                  {day()
                    .date(i+1)
                    .get("D")}
                </Typography>
              </>
            }
          />
        ))}
      </Tabs>
    </>
  );
}
