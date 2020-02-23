import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { StyledDiv, Image } from './styles';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

export const Section = ({ cover, path, alt }) => (
  <StyledDiv>
    <Link to={path}>
      <Image alt={alt} src={cover} />
    </Link>
  </StyledDiv>
);

Section.propTypes = {
  cover: PropTypes.string,
  path: PropTypes.string.isRequired,
  alt: PropTypes.string
};

Section.defaultProps = {
  cover: DEFAULT_IMAGE,
  alt: 'This is a category'
};
