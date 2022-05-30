import { Button, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import DayTimeCard from '../../layouts/components/dayTimeCard/DayTimeCard'
import images from '../../utils/images'

const calendar = images['calendar'].src
const CafeStep3 = ({ handleSubmit, value, handleChange }) => {
  return (
    <Container
      maxWidth='sm'
      style={{ padding: '10px' }}
      component='form'
      onSubmit={handleSubmit}>
      <div style={{ marginTop: '25px' }} align='center'>
        <Typography
          sx={{
            fontWeight: 'bold',
          }}
          gutterBottom
          variant='h3'>
          Set up Cafe
        </Typography>
        <br />

        <Typography gutterBottom variant='h6'>
          Step 4 of 4
        </Typography>

        <DayTimeCard
          img={calendar}
          day='Sunday'
          open='11:00am'
          close='10:00pm'
        />
        <DayTimeCard
          img={calendar}
          day='Monday'
          open='11:00am'
          close='10:00pm'
        />
        <DayTimeCard
          img={calendar}
          day='Tuesday'
          open='11:00am'
          close='10:00pm'
        />
        <DayTimeCard
          img={calendar}
          day='Wednesday'
          open='11:00am'
          close='10:00pm'
        />
        <DayTimeCard
          img={calendar}
          day='Thursday'
          open='11:00am'
          close='10:00pm'
        />
        <DayTimeCard
          img={calendar}
          day='Friday'
          open='11:00am'
          close='10:00pm'
        />
        <DayTimeCard
          img={calendar}
          day='Saturday'
          open='11:00am'
          close='10:00pm'
        />

        <Link href='#' passHref>
          <Typography
            sx={{
              padding: 3,
            }}
            color='#F55800'
            variant='h6'
            component='a'>
            Skip for now
          </Typography>
        </Link>

        <Button fullWidth={true} type='submit' variant='rounded'>
          Continue
        </Button>
      </div>
    </Container>
  )
}

export default CafeStep3
