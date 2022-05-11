import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';

export default function CenteredTabs() {
    const [value, setValue] = React.useState(0);

    const [active, setActive] = React.useState(false)


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (


        <Box sx={{
            width: '100%',
            bgcolor: 'background.paper',
            marginTop: {
                xs: 2
            }

        }}>
            <Tabs TabIndicatorProps={{
                style: {

                    backgroundColor: '#D2603D',
                    borderRadius: '5px',
                    height: '100%',
                    opacity: .8,



                },
            }} value={value} onChange={handleChange}>
                <Tab style={{ color: value === 0 ? "white" : "" }} sx={{
                    backgroundColor: '#F4F5F9',
                    borderRadius: '5px',



                }} label={
                    <Typography variant="p" sx={{
                        zIndex: 1,

                    }}>
                        DAILY</Typography>}
                />
                <Tab style={{ color: value === 1 ? "white" : "" }} sx={{
                    backgroundColor: '#F4F5F9',

                }} label={
                    <Typography variant="p" sx={{
                        zIndex: 1,

                    }}>
                        WEEKLY</Typography>} />
                <Tab style={{ color: value === 2 ? "white" : "" }} sx={{
                    backgroundColor: '#F4F5F9',
                    borderRadius: '5px'
                }} label={
                    <Typography variant="p" sx={{
                        zIndex: 1,

                    }}>
                        MONTHLY</Typography>} />
            </Tabs>

        </Box >
    );
}