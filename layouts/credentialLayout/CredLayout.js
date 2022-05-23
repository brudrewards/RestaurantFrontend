import { Container, Grid } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import Header from './components/Header'

const CredLayout = ({
    title = '',
    children,
    style,
    description = 'Earn rewards for ordering your favorite coffee from local coffee shops.',
    ...props
}) => {
    return (
        <Grid className='CredLayout'>
            <Head>
                <title>Brud Rewards {title ? `| ${title}` : ''}</title>
                <meta name='description' content={description} />
            </Head>
            <Grid item>
                <Header />
            </Grid>
            <Grid component='main' style={{ ...style }} item>
                <Container>{children}</Container>
            </Grid>
        </Grid>
    )
}

export default CredLayout
