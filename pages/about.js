import { Container, Grid, Typography as Font } from "@mui/material";
import React from "react";
import MainLayout from "../layouts/mainLayout/MainLayout";
import Image from "next/image";
import Doron from "../public/assets/team/Doron.png";
import Jesus from "../public/assets/team/Jesus.png";
import Shayan from "../public/assets/team/Shayan.png";
import Roop from "../public/assets/team/Roop.png";
import Harini from "../public/assets/team/Harini.png";

const About = () => {
  return (
    <MainLayout title="About">
      <Container>
        <Font variant="h3" align="center" fontWeight="bold" margin="3rem 0">
          About Brud
        </Font>
        <Font variant="h5" fontWeight="bold" margin="2rem 0" align="center">
          What is BRU&rsquo;D Rewards
        </Font>
        <Font variant="body1">
          BRU’D Rewards is a mobile ordering and in-person coffee shop ordering
          platform offering a generous loyalty rewards program to consumers
          looking to support locally-owned cafes. We differentiate by allowing
          consumers to redeem points earned at any partnered cafe, so they can
          experience a variety of unique cafes at any time.
        </Font>
        <Font variant="h6" fontWeight="bold" margin="2rem 0">
          Why we started
        </Font>
        <Font variant="body1">
          Large coffee shop{" "}
          <Font component="span" fontWeight="bold">
            CHAINS
          </Font>{" "}
          like Starbucks, Dunkin Donuts, and Pete’s Coffee incentivize customers
          to become brand loyal through steep loyalty rewards programs through
          their mobile apps. Similarly, mom-and-pop-owned coffee shops often
          create a loyalty rewards program through a punch or stamp card, but
          people often lose them or forget them at home. We are creating a way
          that consumers don&rsquo;t need to feel locked into one brand of
          coffee shops, while also offering a loyalty rewards program to
          incentivize them to continue supporting local coffee shops.
        </Font>
        <Grid
          container
          justifyContent="center"
          sx={{ mt: 5, mb: 5 }}
          spacing={2}
        >
          <Grid
            item
            xs={6}
            sm={3}
            sx={{
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0.1rem 0.25rem 0.5rem #6b5b5742",
              backgroundColor: "#e2563042",
            }}
          >
            <Image src={Doron} alt="Doron" layout="responsive" quality={50} />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Font
              variant="h6"
              fontWeight="bold"
              margin="2rem 0"
              textAlign="center"
            >
              Doron Eliezer - Founder
            </Font>
            <Font variant="body1">
              Doron is a formally educated entrepreneur at Cal State LA and the
              founder of BRU’D Rewards. He has experience conceptualizing unique
              and innovative ideas and bringing them to life with a business
              approach. When bringing BRU’D to life, he did so with the
              intention of connecting coffee-lovers with the unique experiences
              and environments independent coffee shops created. After traveling
              the world, 21 countries to date, and visiting the many unique
              cafes around the world, he believed that there needed to be a way
              that communities can enjoy the variety of coffee shops around
              them, without sacrificing convenience or perks.
            </Font>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          sx={{ mt: 5, mb: 5 }}
          spacing={2}
        >
          <Grid
            item
            xs={6}
            sm={3}
            sx={{
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0.1rem 0.25rem 0.5rem #6b5b5742",
              backgroundColor: "#e2563042",
            }}
          >
            <Image src={Jesus} alt="Jesus" layout="responsive" quality={50} />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Font
              variant="h6"
              fontWeight="bold"
              margin="2rem 0"
              textAlign="center"
            >
              Jesus Morales - Software Engineer
            </Font>
            <Font variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Viverra tellus in hac habitasse. Ac orci phasellus egestas tellus
              rutrum tellus pellentesque eu. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Viverra tellus in hac habitasse. Ac
              orci phasellus egestas tellus rutrum tellus pellentesque eu.
            </Font>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          sx={{ mt: 5, mb: 5 }}
          spacing={2}
        >
          <Grid
            item
            xs={6}
            sm={3}
            sx={{
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0.1rem 0.25rem 0.5rem #6b5b5742",
              backgroundColor: "#e2563042",
            }}
          >
            <Image src={Shayan} alt="Shayan" layout="responsive" quality={50} />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Font
              variant="h6"
              fontWeight="bold"
              margin="2rem 0"
              textAlign="center"
            >
              Shayan Valaie - Software Developer{" "}
            </Font>
            <Font variant="body1">
              Shayan is a software engineer from Los Angeles, CA. He has always
              enjoyed learning and understanding how things work and that is
              what brought him into tech. He believes programming gives more
              freedom of creativity that many other occupations don’t. “I am
              able to build anything that my mind can imagine!” says
              Shayan. Programming also isn’t the only place where he thrives in
              creativity. In his free time, he enjoys playing and creating
              music. He has played guitar for most of his life. He joined BRU’D
              Rewards, because he believes in its ability to give local coffee
              shops and their customers more value from their coffee experience
              and revolutionize the way their businesses run. 
            </Font>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          sx={{ mt: 5, mb: 5 }}
          spacing={2}
        >
          <Grid
            item
            xs={6}
            sm={3}
            sx={{
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0.1rem 0.25rem 0.5rem #6b5b5742",
              backgroundColor: "#e2563042",
            }}
          >
            <Image src={Roop} alt="Roop" layout="responsive" quality={50} />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Font
              variant="h6"
              fontWeight="bold"
              margin="2rem 0"
              textAlign="center"
            >
              Roop Hayer - Software Developer{" "}
            </Font>
            <Font variant="body1">
              Roop considers himself an artist who loves coding and
              creating things for the web with his bare hands like painting on a
              canvas. After completing his service in US Air Force, he pursued
              my passion for Software Development. Since then, he has never
              looked back and enjoyed every single day talking to a computer! He
              served for 8 years and prides himself on living the Air Force Core
              Values of excellence, integrity, and service before self. “Be
              happy and let others be Happy” is the mantra he lives his life by.
              He’s a big-time foodie and loves mom-and-pop restaurants for their
              unique taste and aesthetics. After hearing about BRU&rsquo;D, the
              concept behind it excited him and joined the awesome team in a
              heartbeat! 
            </Font>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          sx={{ mt: 5, mb: 5 }}
          spacing={2}
        >
          <Grid
            item
            xs={6}
            sm={3}
            sx={{
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0.1rem 0.25rem 0.5rem #6b5b5742",
              backgroundColor: "#e2563042",
            }}
          >
            <Image src={Harini} alt="Harini" layout="responsive" quality={50} />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Font
              variant="h6"
              fontWeight="bold"
              margin="2rem 0"
              textAlign="center"
            >
              Harini Singavarapu – Software Developer
            </Font>
            <Font variant="body1">
              Harini has completed Engineering from Anna University in India.
              She has worked in Apple as a consultant previously. Harini is a
              passionate full stack developer, mainly focusing on Front end,
              building and maintaining responsive websites and features to
              enhance the user experience. Harini is a quick learner and works
              well as an individual contributor or in teams. In her free time,
              Harini loves to spend time with family and friends and going
              outdoors. She likes that BRU’D rewards helps local coffee shops
              grow and helps independent coffee shops compete with big chain of
              coffee shops. She is happy and excited that came across BRU’D to
              contribute to such a great idea. Sidenote, she is also a big-time
              foodie like Roop!
            </Font>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default About;
