import Head from 'next/head'
import React from 'react'
import Header from './Header'

const LandingLayout = (props) => {
  const { children } = props
  return (
    <div className='LandingLayout'>
      <Header />
      <Head>
        <title>Bru&apos;d Rewards</title>
        <meta
          name='description'
          content="Discover the possibilities with Bru'd Rewards"
        />
      </Head>
      {children}
    </div>
  )
}

export default LandingLayout
