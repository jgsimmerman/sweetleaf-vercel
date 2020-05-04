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
      <p>We take great care to ensure that your plant is packaged safe and securely so that it will show up in pristine condition. Each plant is hand inspected before shipping. We want you to love your plants as much as we do!</p>
      <p>Send us an email at <a href="mailto:sweetleafsucculents@gmail.com">sweetleafsucculents@gmail.com</a></p> 
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
