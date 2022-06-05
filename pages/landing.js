import { Fade } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LandingLayout from '../layouts/landingLayout'
import Info from '../layouts/landingLayout/Info'
import images from '../utils/images'

const earn = images['earn']
const redeem = images['redeem']
const experience = images['experience']
const coffee = images['coffee']
const coffee2 = images['coffee2']
const cake = images['cake']
const landing = () => {
  return (
    <LandingLayout>
      {' '}
      <div className='homeScreen'>
        <Fade in={true}>
          <div className='homeScreen__top'>
            <h4>
              Our Mission is to empower local coffee shops, reward coffee
              connoisseurs, and connect communities.
            </h4>
          </div>
        </Fade>
        <Fade in={true}>
          <div className='homeScreen__features'>
            <Info
              title='Earn Rewards'
              image={earn.src}
              info='Rewards on-the-go or in-store purchases.You can earn in participating locally owned store.'
              link='Earn'
              path='/'
              color='#1e3932'
              background='#A37F5B'
              className='info__hoverLight'
            />
            <Info
              title='Redeem'
              image={redeem.src}
              info="Rewards points at any partnered coffee shop so you won't be limited to just one locally owned store."
              link='Redeem'
              path='/'
              color='#1e3932'
              background='#E1A269'
              className='info__hoverLight'
            />
            <Info
              title='Experience'
              image={experience.src}
              info='Unique environments, mouth watering food, craft beverages.'
              link='Experience'
              path='/'
              color='#1e3932'
              background='#A37F5B'
              className='info__hoverLight'
            />
          </div>
        </Fade>
        <Fade in={true}>
          <div className='homeScreen__bottom'>
            <div className='homeScreen__bottomLeft'>
              <p>
                Sign up to be one of the first people to take advantage of steep
                rewards with the first coffee on us!
              </p>

              <Link href='/account/create' passHref>
                <button className='homeScreen__button '>Join Now</button>
              </Link>
            </div>
            <div className='homeScreen__bottomRight'>
              <Image src={coffee.src} alt={coffee.alt} />
              <Image src={coffee2.src} alt={coffee2.alt} />
              <Image src={cake.src} alt={cake.alt} />
            </div>
          </div>
        </Fade>
      </div>
    </LandingLayout>
  )
}

export default landing
