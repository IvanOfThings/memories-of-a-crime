import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 10
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export const MemoryCard = ({ title, details }) => {
  const classes = useStyles();
  return (
    <ScopedCssBaseline>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {details}
          </Typography>
        </CardContent>
      </Card>
    </ScopedCssBaseline>
  );
};

MemoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired
};
