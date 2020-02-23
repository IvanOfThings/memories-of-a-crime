import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core';

export const Form = styled.form`
  margin: 45vh auto;
  display: flex;
  justify-content: center;
  /*overflow: scroll;*/
  width: 100%;
`;

export const Login = ({ idHandler }) => {
  const [idUser, setIdUser] = useState(null);

  const myChangeHandler = event => {
    setIdUser(event.target.value);
  };

  return (
    <Form noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-basic"
          label="User Id"
          onChange={event => {
            myChangeHandler(event);
          }}
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            idHandler(idUser);
          }}
        >
          Login
        </Button>
      </div>
    </Form>
  );
};

Login.propTypes = {
  idHandler: PropTypes.func.isRequired
};
