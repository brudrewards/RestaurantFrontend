
import React from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import DayTimeCard from '../layouts/components/dayTimeCard/DayTimeCard'
import img from '../public/assets/green-calendar.png'
import Button from '@mui/material/Button';
import Link from 'next/link'



const CafeSetup4 = () => {
  return (
    <>
      <Container maxWidth="sm" style={{ padding: '10px' }}>

        <div style={{ marginTop: '25px' }} align="center">
          <Typography sx={{
            fontWeight: 'bold'
          }} gutterBottom variant="h3">Set up Cafe</Typography>
          <br />

          <Typography sx={{

          }} gutterBottom variant="h6">Step 4 of 4</Typography>

          <DayTimeCard img={img} day="Sunday" open="11:00am" close="10:00pm" />
          <DayTimeCard img={img} day="Monday" open="11:00am" close="10:00pm" />
          <DayTimeCard img={img} day="Tuesday" open="11:00am" close="10:00pm" />
          <DayTimeCard img={img} day="Wednesday" open="11:00am" close="10:00pm" />
          <DayTimeCard img={img} day="Thursday" open="11:00am" close="10:00pm" />
          <DayTimeCard img={img} day="Friday" open="11:00am" close="10:00pm" />
          <DayTimeCard img={img} day="Saturday" open="11:00am" close="10:00pm" />

          <Link href="#">
            <a><Typography sx={{
              padding: 3,
            }} color="#F55800" variant="h6">Skip for now</Typography></a>
          </Link>

          <Button style={{






          }} fullWidth={true} type="submit" variant="rounded">Continue</Button>


        </div>

      </Container>



    </>
  )
}

export default CafeSetup4