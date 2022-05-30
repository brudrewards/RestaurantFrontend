import { Button, Container, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import images from '../../utils/images'

const cafeShop = images['cafeShop']
const CafeStep1 = ({ next, value, handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    next()
  }
  return (
    <Container maxWidth='sm' style={{ padding: '10px' }}>
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
          Step 1 of 4
        </Typography>

        <Image
          src={cafeShop.src}
          alt={cafeShop.alt}
          width={150}
          height={150}
          priority={true}
        />
      </div>
      <div style={{ marginTop: '50px' }}>
        <form onSubmit={handleSubmit}>
          <Box
            style={{ marginTop: '50px' }}
            sx={{
              padding: '16px',
            }}
            noValidate
            autoComplete='off'>
            <TextField
              fullWidth={true}
              id='standard-basic'
              label='Restaurant Name'
              variant='standard'
              name='restaurant'
              value={value.restaurant}
              onChange={handleChange}
              required
            />
            <TextField
              style={{ marginTop: '40px' }}
              fullWidth={true}
              id='standard-basic'
              label='Manager Full Name'
              variant='standard'
              name='manager'
              value={value.manager}
              onChange={handleChange}
              required
            />
            <TextField
              style={{ marginTop: '40px' }}
              fullWidth={true}
              id='standard-basic'
              label='Phone Number'
              variant='standard'
              name='phone'
              type='tel'
              value={value.phone}
              onChange={handleChange}
              required
            />
            <Button
              style={{
                marginTop: '100px',
              }}
              fullWidth={true}
              type='submit'
              variant='rounded'>
              Continue
            </Button>
          </Box>
        </form>
      </div>
    </Container>
  )
}

export default CafeStep1
