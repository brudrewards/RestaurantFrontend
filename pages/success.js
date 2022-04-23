import MainLayout from '../layouts/mainLayout/MainLayout'
import { Grid, Button, Typography as Font } from '@mui/material'
import { primaryColor } from '../styles/themes/defaultTheme'
import Image from 'next/image'
import images from '../utils/images'
const Success = () => {
  const { approvedOutline } = images
  return (
    <MainLayout title='Success'>
      <Grid
        container
        direction='column'
        alignContent='center'
        spacing={4}
        display='flex'
        height='100vh'
        justifyContent='center'>
        <Grid item display='flex' justifyContent='center'>
          <Image
            src={approvedOutline.src}
            alt={approvedOutline.alt}
            layout='intrinsic'
            width={150}
            height={100}
            priority={true}
            quality={100}
            onClick={() => router.push('/')}
          />
        </Grid>
        <Grid item>
          <Font variant='body1' textAlign='center'>
            you have been Login{' '}
            <Font variant='h2' color={primaryColor} m='.5rem 0'>
              Successfully!
            </Font>
          </Font>
        </Grid>

        <Grid item>
          <Button variant='rounded' fullWidth>
            <Font variant='button'>Done</Font>
          </Button>
        </Grid>
      </Grid>
    </MainLayout>
  )
}

export default Success
