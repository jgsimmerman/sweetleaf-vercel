import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import Login from './login'

const Members = center => (
  <Layout>
    <Helmet title={'Members Area'} />
    <Header title="Members Area"></Header>
    <Container center={center}>
      <Login />
    </Container>
  </Layout>
);

export default Members;

Container.propTypes = {
  center: PropTypes.object,
};