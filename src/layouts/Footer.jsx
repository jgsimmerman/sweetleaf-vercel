import React from 'react';
import styled from '@emotion/styled';
import { SocialIcon } from 'react-social-icons';
import { Link, graphql } from 'gatsby';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.base};
`;

const Footer = () => (
  <Wrapper>
    <Text>
      {/* <hr></hr> */}
      <div>
        Sweet Leaf Succulents and Ornamental Plants, LLC{' '}
        {/* <a href="https://twitter.com/jacobsimmerman">Follow us on twitter!</a> */}
      </div>
      <span>
        <Link to="/shipping/">Shipping Policies</Link> {' | '}
      </span>
      <span>
        <Link to="/privacy/">Privacy Policy</Link> {' | '}
      </span>
      <span>
        <Link to="/terms/">Terms and Conditions</Link> {' '}
      </span>
    </Text>
  </Wrapper>
);
export default Footer;
