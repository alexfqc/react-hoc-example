import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { compose, setDisplayName, setPropTypes } from 'recompose';
import getThemeColor from './utils';

const enhance = compose(
  withRouter,
  setDisplayName('Theme'),
  setPropTypes({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }),
);

export default WrappedComponent =>
  enhance(props => <WrappedComponent color={getThemeColor(props.location.pathname)} {...props} />);
