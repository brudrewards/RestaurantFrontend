import { useState } from 'react'
import {
  Grid,
  Button,
  TextField,
  Typography as Font,
  Container,
} from '@mui/material'
import { login } from '../../utils/axios'
import Link from 'next/link'

const LoginForm = ({ ...props }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const deviceToken = localStorage.getItem('token')
    const res = await login({ email, password, deviceToken })
    // todo: handle response/errors from server
    console.log(res)
  }
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email': {
        setEmail(value)
        break
      }
      case 'password': {
        setPassword(value)
        break
      }
      default: {
        console.log('incorrect name')
      }
    }
  }
  return (
    <Container maxWidth='sm' {...props}>
      <Grid
        container
        direction='column'
        alignContent='center'
        spacing={4}
        justifyContent='center'>
        <Grid item>
          <Font variant='h3' component='h1'>
            Login your account
          </Font>
          <Font variant='subtitle' color='primary'>
            Fill in you credentials
          </Font>
        </Grid>
        <Grid
          item
          container
          component='form'
          onSubmit={handleSubmit}
          direction='column'
          spacing={2}>
          <Grid item>
            <TextField
              name='email'
              label='Email address'
              type='email'
              onChange={handleChange}
              value={email}
              variant='standard'
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              name='password'
              label='Password'
              type='password'
              variant='standard'
              onChange={handleChange}
              value={password}
              fullWidth
            />
          </Grid>
          <Grid item>
            <Button variant='rounded' type='submit' fullWidth>
              <Font variant='button'>Login</Font>
            </Button>
          </Grid>

          <Grid item>
            <Font variant='body1'>
              Forgot password?{' '}
              <Link href='/forgot-password' passHref>
                <Font variant='body1' color='primary' component='a'>
                  Reset Password
                </Font>
              </Link>
            </Font>
          </Grid>
          <Grid item>
            <Font variant='body1'>
              Don&apos;t have an account?{' '}
              <Link href='/register' passHref>
                <Font variant='body1' color='primary' component='a'>
                  Register
                </Font>
              </Link>
            </Font>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default LoginForm
