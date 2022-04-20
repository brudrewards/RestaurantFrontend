import { Grid } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../../public/assets/logo.png'

const Header = () => {
    return (
        <Grid component='nav' justifyItems='center' container className='clear'>
            <Grid item className='Logo'>
                <Link href='/' passHref>
                    <Image
                        src={Logo}
                        alt='Brud rewards Logo'
                        layout='responsive'
                    />
                </Link>
            </Grid>
        </Grid>
    )
}

export default Header
