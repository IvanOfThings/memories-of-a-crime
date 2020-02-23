import React from 'react';
import PropTypes from 'prop-types';
import { Section } from '../Section';
import { List, Item } from './styles';

export const ListOfSections = ({ sections }) => (
  <nav>
    <List>
      {sections.map(section => (
        <Item key={section.key}>
          <Section cover={section.cover} path={section.path} />
        </Item>
      ))}
    </List>
  </nav>
);

ListOfSections.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      cover: PropTypes.func.isRequired,
      alt: PropTypes.string,
      emoji: PropTypes.string
    })
  ).isRequired
};
