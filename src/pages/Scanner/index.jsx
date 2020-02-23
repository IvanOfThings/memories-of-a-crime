/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import QrReader from 'react-qr-reader';
import { MemoryCard } from '../../components/MemoryCard';

const handleError = err => {
  console.error(err);
};

const USE_CODE = gql`
  mutation useCode($code: ID, $userId: ID) {
    useCode(code: $code, userId: $userId) {
      title
      details
      levelBlock
    }
  }
`;

export const Scanner = ({ idUser }) => {
  const [code, setCode] = useState(null);
  const [message, setMessage] = useState(null);
  const [memory, setMemory] = useState(null);

  const [registerCode] = useMutation(USE_CODE, {
    onCompleted: ({ useCode }) => {
      if (useCode) {
        setMessage('Un nuevo recuerdo vuelve a tu mente...');
        setMemory(useCode);
        // redirectTo('/memories');
      } else {
        setMessage(
          'El código no funciona puede que ya ha haya sido utilizado o hayas alcanzado el máximo de recuerdos.'
        );
      }
    }
  });
  const handleScan = handledData => {
    if (handledData) {
      setCode(handledData);
      registerCode({
        variables: { code: handledData, userId: idUser }
      });
    }
  };

  return (
    <>
      {code ? (
        memory ? (
          <>
            <p>{message}</p>
            <MemoryCard title={memory.title} details={memory.details} />
          </>
        ) : (
          <p>{message}</p>
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
