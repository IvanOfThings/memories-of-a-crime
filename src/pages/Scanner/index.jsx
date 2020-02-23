/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import QrReader from 'react-qr-reader';
import styled from 'styled-components';
import { MemoryCard } from '../../components/MemoryCard';

const handleError = err => {
  console.error(err);
};

const USE_CODE = gql`
  mutation useCode($code: ID, $idUser: ID) {
    useCode(code: $code, userId: $idUser) {
      title
      details
      levelBlock
    }
  }
`;

const PWrapper = styled.div`
  margin: 20px 25px 0 25px;
  width: 80;
`;

export const Scanner = props => {
  const [code, setCode] = useState(null);
  const [message, setMessage] = useState(null);
  const [memory, setMemory] = useState(null);

  const handler = data => {
    if (data && data.useCode) {
      setMessage('Un nuevo recuerdo vuelve a tu mente...');
      setMemory(data.useCode);
      // redirectTo('/memories');
    } else {
      setMessage(
        'El código no funciona puede que ya ha haya sido utilizado o hayas alcanzado el máximo de recuerdos.'
      );
    }
  };

  const [registerCode, { data }] = useMutation(USE_CODE, {
    onCompleted: data => {
      handler(data);
    }
  });

  const handleScan = data => {
    if (data) {
      setCode(data);
      registerCode({
        variables: { code: data, idUser: props.idUser }
      });
    }
  };

  return (
    <>
      {code ? (
        memory ? (
          <>
            <PWrapper>
              <p>{message}</p>
            </PWrapper>
            <MemoryCard title={memory.title} details={memory.details} />
          </>
        ) : (
          <MemoryCard title="No funciona" details={message} />
        )
      ) : (
        <QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: '100%' }} />
      )}
    </>
  );
};

Scanner.propTypes = {
  idUser: PropTypes.string.isRequired
};
