import { useState } from 'react'
import { useRouter } from 'next/router'
import {
    Grid,
    Button,
    TextField,
    Typography as Font,
    Container,
} from '@mui/material'
import CredLayout from '../layouts/credentialLayout'

const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
        console.log('submit')
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
        <CredLayout title='Login'>
            <Container maxWidth='sm'>
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
                                <Font
                                    variant='body1'
                                    color='primary'
                                    component='a'
                                    onClick={() =>
                                        router.push('/forgot-password')
                                    }>
                                    Reset Password
                                </Font>
                            </Font>
                        </Grid>
                        <Grid item>
                            <Font variant='body1'>
                                Don&apos;t have an account?{' '}
                                <Font
                                    variant='body1'
                                    color='primary'
                                    component='a'
                                    onClick={() => router.push('/register')}>
                                    Register
                                </Font>
                            </Font>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </CredLayout>
    )
}

export default Login
