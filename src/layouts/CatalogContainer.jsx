import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Container } from './Container';

const Wrapper = styled(Container)`
  flex-basis: calc(99.9% * 1 / 3 - 2.5rem);
  max-width: calc(99.9% * 1 / 3 - 2.5rem);
  width: calc(99.9% * 1 / 3 - 2.5rem);

  @media (max-width: 1200px) {
    flex-basis: 50%;
    max-width: 50%;
    width: 50%;
  }
  @media (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 500px) {
    min-height: 200px;
  }
`;

const CatalogContainer = ({ children, type, className, center }) => (
  <Wrapper className={className} type={type} center={center}>
    {children}
  </Wrapper>
);

export default CatalogContainer;

CatalogContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  center: PropTypes.object,
};
