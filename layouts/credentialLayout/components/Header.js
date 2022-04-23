import { Grid } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import images from '../../../utils/images'

const Header = () => {
  const { logo } = images
  return (
    <Grid component='nav' justifyItems='center' container className='clear'>
      <Grid item className='Logo'>
        <Link href='/' passHref>
          <Image src={logo.src} alt={logo.alt} layout='responsive' />
        </Link>
      </Grid>
    </Grid>
  )
}

export default Header
