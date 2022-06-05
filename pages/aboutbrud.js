import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import LandingLayout from '../layouts/landingLayout'
import images from '../utils/images'

const doron = images['doron']
const jesus = images['jesus']
const roop = images['roop']
const shayan = images['shayan']
const harini = images['harini']

const Aboutbrud = () => {
  return (
    <LandingLayout>
      <div className='brudScreen__top'>
        <h2>What is BRU&apos;D Rewards</h2>
        <h4>
          BRU’D Rewards is a mobile ordering and in-person coffee shop ordering
          platform offering a generous loyalty rewards program to consumers
          looking to support locally-owned cafes. We differentiate by allowing
          consumers to redeem points earned at any partnered cafe, so they can
          experience a variety of unique cafes at any time
        </h4>
        <h2>Why we started?</h2>
        <h4>
          Large coffee shop chains like Starbucks, Dunkin Donuts, and Pete’s
          Coffee incentivize customers to become brand loyal through steep
          loyalty rewards programs through their mobile apps. Similarly,
          mom-and-pop-owned coffee shops often create a loyalty rewards program
          through a punch or stamp card, but people often lose them or forget
          them at home. We are creating a way that consumers don&apos;t need to
          feel locked into one brand of coffee shops, while also offering a
          loyalty rewards program to incentivize them to continue supporting
          local coffee shops.
        </h4>
      </div>
      <div className='line'>
        <br />
      </div>
      <h1 className='brudScreen__meet'>Meet Our Team</h1>
      <div className='about-bottom'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container className='box-container'>
            <Grid item xs={12} md={4}>
              <div className='flip-card-container'>
                <div className='flip-card'>
                  <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                      <Image
                        src={doron.src}
                        alt={doron.alt}
                        className='flip-main-img'
                      />
                      <h1 className='meetUS__name'>Doron Eliezer - Founder</h1>
                    </div>
                    <div className='flip-card-back'>
                      <br />
                      <p>
                        Doron is a formally educated entrepreneur at Cal State
                        LA and the founder of BRU’D Rewards. He has experience
                        conceptualizing unique and innovative ideas and bringing
                        them to life with a business approach. When bringing
                        BRU’D to life, he did so with the intention of
                        connecting coffee-lovers with the unique experiences and
                        environments independent coffee shops created. After
                        traveling the world, 21 countries to date, and visiting
                        the many unique cafes around the world, he believed that
                        there needed to be a way that communities can enjoy the
                        variety of coffee shops around them, without sacrificing
                        convenience or perks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className='flip-card-container'>
                <div className='flip-card'>
                  <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                      <Image
                        src={jesus.src}
                        alt={jesus.alt}
                        className='flip-main-img'
                      />
                      <h1 className='meetUS__name'>
                        Jesus Morales – Lead Software Engineer
                      </h1>
                    </div>
                    <div className='flip-card-back'>
                      <br />
                      <p>
                        Jesus began his coding adventure at the age of 10 and
                        fell in love with it as his passion grew. His passion
                        began as gaming and technology has always been around
                        him as long as he can remember. After graduating high
                        school, he began to self study the basics of web
                        development, which led him to pursue his professional
                        education at Western Governors University. His time now
                        is mostly focused on creating the infrastructure for
                        BRU’D to succeed, some person projects, and continuing
                        his software engineer education to excel in all areas of
                        coding.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className='flip-card-container'>
                <div className='flip-card'>
                  <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                      <Image
                        src={roop.src}
                        alt={roop.alt}
                        className='flip-main-img'
                      />
                      <h1 className='meetUS__name'>
                        Roop Hayer - Software Developer
                      </h1>
                    </div>
                    <div className='flip-card-back'>
                      <br />
                      <p>
                        Roop considers himself an artist who loves coding and
                        creating things for the web with his bare hands like
                        painting on a canvas. After completing his service in US
                        Air Force, he pursued my passion for Software
                        Development. Since then, he has never looked back and
                        enjoyed every single day talking to a computer! He
                        served for 8 years and prides himself on living the Air
                        Force Core Values of excellence, integrity, and service
                        before self. “Be happy and let others be Happy” is the
                        mantra he lives his life by. He’s a big-time foodie and
                        loves mom-and-pop restaurants for their unique taste and
                        aesthetics. After hearing about BRU&apos;D, the concept
                        behind it excited him and joined the awesome team in a
                        heartbeat!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid container className='box-container'>
            <Grid item xs={12} md={2}>
              {' '}
            </Grid>
            <Grid item xs={12} md={4}>
              <div className='flip-card-container'>
                <div className='flip-card'>
                  <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                      <Image
                        src={shayan.src}
                        alt={shayan.alt}
                        className='flip-main-img'
                      />
                      <h1 className='meetUS__name'>
                        Shayan Valaie – Software Developer
                      </h1>
                    </div>
                    <div className='flip-card-back'>
                      <br />
                      <p>
                        Shayan is a software engineer from Los Angeles, CA. He
                        has always enjoyed learning and understanding how things
                        work and that is what brought him into tech. He believes
                        programming gives more freedom of creativity that many
                        other occupations don’t. “I am able to build anything
                        that my mind can imagine!” says Shayan. Programming also
                        isn’t the only place where he thrives in creativity. In
                        his free time, he enjoys playing and creating music. He
                        has played guitar for most of his life. He joined BRU’D
                        Rewards, because he believes in its ability to give
                        local coffee shops and their customers more value from
                        their coffee experience and revolutionize the way their
                        businesses run. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className='flip-card-container'>
                <div className='flip-card'>
                  <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                      <Image
                        src={harini.src}
                        alt={harini.alt}
                        className='flip-main-img'
                      />
                      <h1 className='meetUS__name'>
                        Harini Singavarapu – Software Developer
                      </h1>
                    </div>
                    <div className='flip-card-back'>
                      <br />
                      <p>
                        Harini has completed Engineering from Anna University in
                        India. She has worked in Apple as a consultant
                        previously. Harini is a passionate full stack developer,
                        mainly focusing on Front end, building and maintaining
                        responsive websites and features to enhance the user
                        experience. Harini is a quick learner and works well as
                        an individual contributor or in teams. In her free time,
                        Harini loves to spend time with family and friends and
                        going outdoors. She likes that BRU’D rewards helps local
                        coffee shops grow and helps independent coffee shops
                        compete with big chain of coffee shops. She is happy and
                        excited that came across BRU’D to contribute to such a
                        great idea. Sidenote, she is also a big-time foodie like
                        Roop!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={2}>
              {' '}
            </Grid>
          </Grid>
        </Box>
      </div>
    </LandingLayout>
  )
}

export default Aboutbrud
