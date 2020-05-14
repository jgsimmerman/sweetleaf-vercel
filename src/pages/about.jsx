import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Us'} />
    <Header title="About Us"></Header>
    <Container center={center}>
      <h3>Welcome to Sweet Leaf Succulents!</h3>
      <p>Based in Lamar, South Carolina; we specialize in succulents and small ornamental plants that are ideal for fairy gardens, terrariums, or your workspace.</p>
      <p>We take great care to ensure that your plant is packaged safe and securely so that it will show up in pristine condition. We've bought plants from the big box
        shops only to have them die from something that happened before we even got them home. We've also ordered plants from the internet and had them explode in the box
        due to careless packaging, leading to an unboxing of soil and stray plants. We wanted to offer something better. Each of our plants is hand inspected and 
        packaged before shipping because we want you to love your plants as much as we do!</p>
      <p>If you have any questions, feel free to send us an email at <a href="mailto:sweetleafsucculents@gmail.com">sweetleafsucculents@gmail.com</a></p> 
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
