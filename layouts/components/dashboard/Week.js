import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function ScrollableTabsButtonAuto() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%", bgcolor: 'background.paper' }}>


            <Tabs
                centered
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"


            >
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flexDirection: 'column' }}>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }} variant="h6">Mon</Typography>
                        <Tab label="6" />
                    </Box>
                    <Box sx={{ flexDirection: 'column' }}>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }} variant="h6">Tue</Typography>
                        <Tab label="7" />
                    </Box>
                    <Box sx={{ flexDirection: 'column' }}>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }} variant="h6">Wed</Typography>
                        <Tab label="8" />
                    </Box>
                    <Box sx={{ flexDirection: 'column' }}>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }} variant="h6">Thu</Typography>
                        <Tab label="9" />
                    </Box>
                    <Box sx={{ flexDirection: 'column' }}>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }} variant="h6">Fri</Typography>
                        <Tab label="10" />
                    </Box>
                    <Box sx={{ flexDirection: 'column' }}>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }} variant="h6">Sat</Typography>
                        <Tab label="11" />
                    </Box>
                    <Box sx={{ flexDirection: 'column' }}>
                        <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }} variant="h6">Sun</Typography>
                        <Tab label="12" />
                    </Box>


                </Box>
            </Tabs>
        </Box>
    );
}