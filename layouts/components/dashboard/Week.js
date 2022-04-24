import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';


export default function ScrollableTabsButtonAuto() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
                TabIndicatorProps={{
                    style: {

                        backgroundColor: '#D2603D',
                        borderRadius: '5px',
                        height: '100%',
                        opacity: .8,



                    },
                }}
            >



                <Tab style={{ color: value === 0 ? "white" : "" }} label={
                    <Typography variant="p" sx={{
                        zIndex: 1,

                    }}>
                        6</Typography>} />


                <Tab sx={{ marginLeft: 9 }} style={{ color: value === 1 ? "white" : "" }} label={
                    <Typography variant="p" sx={{
                        zIndex: 1,

                    }}>
                        7</Typography>} />
                <Tab
                    sx={{ marginLeft: 9 }}
                    style={{ color: value === 2 ? "white" : "" }}
                    label={
                        <Typography variant="p" sx={{
                            zIndex: 1,

                        }}>
                            8</Typography>} />
                <Tab sx={{ marginLeft: 9 }} style={{ color: value === 3 ? "white" : "" }}
                    label={
                        <Typography variant="p" sx={{
                            zIndex: 1,

                        }}>
                            9</Typography>} />
                <Tab sx={{ marginLeft: 9 }} style={{ color: value === 4 ? "white" : "" }}
                    label={
                        <Typography variant="p" sx={{
                            zIndex: 1,

                        }}>
                            10</Typography>} />
                <Tab sx={{ marginLeft: 9 }} style={{ color: value === 5 ? "white" : "" }}
                    label={
                        <Typography variant="p" sx={{
                            zIndex: 1,

                        }}>
                            11</Typography>} />
                <Tab sx={{ marginLeft: 9 }} style={{ color: value === 6 ? "white" : "" }}
                    label={
                        <Typography variant="p" sx={{
                            zIndex: 1,

                        }}>
                            12</Typography>} />

            </Tabs>

        </>

    );
}