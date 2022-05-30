import { useState, React } from 'react'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CredLayout from '../layouts/credentialLayout'

const Register = () => {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    const handleEmail = ({ target: { value } }) => {
        if (value.length < 1) {
            setEmailError('Enter your email to receive your one time password')
        } else {
            setEmailError('')
        }
        setEmail(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)

        console.log('submit')
    }

    return (
        <CredLayout title='Register'>
            <Container maxWidth='sm' className='Register'>
                <Typography gutterBottom variant='h5'>
                    Let&apos;s create your account
                    <Typography variant='subtitle1' color='primary'>
                        Enter an email to get started
                    </Typography>
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth={true}
                        onChange={handleEmail}
                        id='standard-basic'
                        label='Email Address'
                        variant='standard'
                        type='email'
                        helperText={emailError}
                        error={emailError.length}
                        required
                    />
                    <Button
                        fullWidth={true}
                        type='submit'
                        variant='rounded'
                        className='Submit'>
                        Get Code
                    </Button>
                </form>
            </Container>
        </CredLayout>
    )
}

export default Register
