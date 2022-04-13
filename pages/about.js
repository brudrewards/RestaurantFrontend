import { Container, Typography as Font } from "@mui/material";
import React from "react";
import MainLayout from "../layouts/mainLayout/MainLayout";

const About = () => {
  return (
    <MainLayout title="About">
      <Container>
        <Font variant="h3" align="center" fontWeight="bold" margin="3rem 0">
          About Brud
        </Font>
        <Font variant="h5" fontWeight="bold" margin="2rem 0" align="center">
          A brief about Brud{" "}
        </Font>
        <Font variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer
          malesuada nunc vel risus commodo. Eros in cursus turpis massa
          tincidunt dui ut ornare. Tristique senectus et netus et malesuada
          fames ac turpis. At risus viverra adipiscing at in tellus integer
          feugiat scelerisque. Augue mauris augue neque gravida. Sed vulputate
          odio ut enim blandit. Viverra maecenas accumsan lacus vel facilisis
          volutpat est velit. Netus et malesuada fames ac turpis. Ut eu sem
          integer vitae justo eget magna fermentum. Sit amet justo donec enim
          diam. Odio tempor orci dapibus ultrices. Dictum non consectetur a erat
          nam at. Facilisis sed odio morbi quis commodo odio aenean. Volutpat
          diam ut venenatis tellus in metus vulputate eu scelerisque. Faucibus
          scelerisque eleifend donec pretium vulputate sapien nec sagittis. Mi
          ipsum faucibus vitae aliquet nec ullamcorper sit. Turpis egestas
          pretium aenean pharetra magna ac placerat vestibulum lectus. Eget
          velit aliquet sagittis id consectetur purus ut faucibus. Est ultricies
          integer quis auctor elit sed. Cras tincidunt lobortis feugiat vivamus
          at. Consequat mauris nunc congue nisi vitae suscipit tellus mauris.
          Pretium vulputate sapien nec sagittis aliquam malesuada. Vitae
          elementum curabitur vitae nunc sed velit dignissim sodales ut.
        </Font>
        <Font variant="h6" fontWeight="bold" margin="2rem 0">
          de Finibus Bonorum et Malorum
        </Font>
        <Font variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
          tellus in hac habitasse. Ac orci phasellus egestas tellus rutrum
          tellus pellentesque eu. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Viverra tellus in hac habitasse. Ac orci phasellus
          egestas tellus rutrum tellus pellentesque eu.
        </Font>
      </Container>
    </MainLayout>
  );
};

export default About;
