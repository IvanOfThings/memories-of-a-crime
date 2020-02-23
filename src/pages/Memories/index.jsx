import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { MemoryCard } from '../../components/MemoryCard';
import { List, ButtonWrapper } from './styles';

export const Memories = ({ memories, reload }) => {
  return (
    <>
      <List>
        {memories.map(memory => (
          <MemoryCard key={`memory-${memory.id}`} title={memory.title} details={memory.details} />
        ))}
      </List>
      <ButtonWrapper>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            reload();
          }}
        >
          Reload
        </Button>
      </ButtonWrapper>
    </>
  );
};

Memories.propTypes = {
  memories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired
    })
  ).isRequired,
  reload: PropTypes.func.isRequired
};
