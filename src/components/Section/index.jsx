import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { StyledDiv, Image } from './styles';

export const Section = ({ cover, path, alt }) => (
  <StyledDiv>
    <Link to={path}>{cover({ size: 100 })}</Link>
  </StyledDiv>
);

Section.propTypes = {
  cover: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  alt: PropTypes.string
};

Section.defaultProps = {
  alt: 'This is a category'
};
