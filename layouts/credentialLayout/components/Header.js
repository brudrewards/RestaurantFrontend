import { Grid } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import images from '../../../utils/images'

const Header = () => {
  const { logo } = images
  return (
    <Grid component='nav' justifyItems='center' container>
      <Grid item className='Logo'>
        <Link href='/' passHref>
          <a>
            <Image src={logo.src} alt={logo.alt} layout='responsive' />
          </a>
        </Link>
      </Grid>
    </Grid>
  )
}

export default Header
