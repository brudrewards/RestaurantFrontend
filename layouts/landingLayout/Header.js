import { Container, Grid } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import images from '../../utils/images'
import MobileMenu from './MobileMenu'
import SignUpButton from './SignUpButton'
const logo = images['logo']

const Header = () => {
  return (
    <Container maxWidth='xl'>
      <Grid
        component='nav'
        container
        direction='row'
        justifyContent='space-between'>
        <Grid item>
          <Grid container direction='row' spacing={3} alignItems='center'>
            <Grid item>
              <Link className='header_logo' href='/' passHref>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  height='50px'
                  width='70px'
                />
              </Link>
            </Grid>
            <Grid item>
              <Link href='/aboutbrud' className='header__link'>
                About Bru&apos;d
              </Link>
            </Grid>
            <Grid item>
              <Link href='/cafePartners' className='header__link'>
                Cafe Partners
              </Link>
            </Grid>
            <Grid item>
              <Link href='/download_app' className='header__link'>
                Download App
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <MobileMenu />
          <Link href='/account/create' passHref>
            <SignUpButton />
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Header
