import React, { useState } from 'react';
import { Router } from '@reach/router';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import { MdMemory, MdList } from 'react-icons/md';
import { ListOfSections } from '../components/ListOfSections';
import { Memories } from './Memories';
import { Scanner } from './Scanner';
import { Login } from './Login';

const sections = [
  {
    key: 'section-1',
    path: '/memories',
    cover: MdList
  },
  {
    key: 'section-2',
    path: '/download',
    cover: MdMemory
  }
];
/*
const memories = [
  {
    key: 'memory-1',
    title: 'esto es un titulo',
    details: 'Esto es una primera memoria de ejemplo'
  },
  {
    key: 'memory-2',
    title: 'esto es un titulo',
    details: 'Esto es una segunda memoria de ejemplo'
  }
]; */

const GET_USERS = gql`
  query getUsers($id: ID) {
    User(id: $id) {
      id
      name
      memoryLevel
      memories {
        id
        title
        details
        levelBlock
      }
    }
  }
`;

export const SpinnerWrapper = styled.div`
  margin: 50px 25ch;
  justify-content: center;
  width: 100%;
`;

export const Home = () => {
  const [idUser, setIdUser] = useState(null);
  const [toggle, setToggle] = useState(false);

  const { data, loading } = useQuery(GET_USERS, {
    variables: {
      id: idUser,
      toggle
    },
    fetchPolicy: 'no-cache',
    skip: idUser === null
  });

  return idUser ? (
    <>
      <ListOfSections sections={sections} />
      {loading ? (
        <SpinnerWrapper>
          <CircularProgress />
        </SpinnerWrapper>
      ) : (
        <Router>
          <Memories
            default
            path="memories"
            memories={data.User.memories}
            reload={() => {
              setToggle(!toggle);
            }}
          />
          <Scanner path="download" idUser={idUser} />
        </Router>
      )}
    </>
  ) : (
    <Login
      idHandler={id => {
        setIdUser(id);
      }}
    />
  );
};
