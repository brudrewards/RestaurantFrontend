import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from '@mui/icons-material'
import { Grid, Typography as Font } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import images from '../../../utils/images'
const Footer = () => {
  const { rewards, holdingLatte } = images
  return (
    <Grid
      component='footer'
      container
      alignItems='center'
      spacing={5}
      direction='column'>
      <Image
        src={holdingLatte.src}
        alt={holdingLatte.alt}
        className='Background'
        layout='fill'
        objectFit='fill'
      />
      <Grid item>
        <Link href='/' passHref>
          <Image
            src={rewards.src}
            alt={rewards.alt}
            width={224}
            height={125}
            style={{ innerWidth: 99 }}
          />
        </Link>
      </Grid>
      <Grid item>
        <Grid container justifyContent='center' spacing={2}>
          <Grid item>
            <Link href='/' passHref>
              <Font color='white' variant='body1' component='a'>
                Home
              </Font>
            </Link>
          </Grid>
          <Grid item>
            <Link href='/orders' passHref>
              <Font color='white' variant='body1' component='a'>
                Orders
              </Font>
            </Link>
          </Grid>
          <Grid item>
            <Link href='/menu' passHref>
              <Font color='white' variant='body1' component='a'>
                Menu
              </Font>
            </Link>
          </Grid>
          <Grid item>
            <Link href='/earnings' passHref>
              <Font color='white' variant='body1' component='a'>
                Earnings
              </Font>
            </Link>
          </Grid>
          <Grid item>
            <Link href='/restaurant' passHref>
              <Font color='white' variant='body1' component='a'>
                My Restaurant
              </Font>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justifyContent='center' spacing={3}>
          <Grid item>
            <YouTube color='primary' />
          </Grid>
          <Grid item>
            <Twitter color='primary' />
          </Grid>
          <Grid item>
            <a
              href='https://www.facebook.com/brudrewards'
              rel='noreferrer'
              target='_blank'>
              <Facebook color='primary' />
            </a>
          </Grid>
          <Grid item>
            <Instagram color='primary' />
          </Grid>
          <Grid item>
            <LinkedIn color='primary' />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Font color='white' variant='body2' align='center'>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners.
        </Font>
        <Font color='white' variant='body2' align='center'>
          2008-2022 © Brud. All rights reserved.
        </Font>
      </Grid>
    </Grid>
  )
}

export default Footer
