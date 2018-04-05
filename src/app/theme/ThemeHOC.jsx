import React from 'react';
import PropTypes from 'prop-types';
import getThemeColor from './utils';

const ThemeHOC = (WrappedComponent) => {
  const Theme = (props) => {
    const color = getThemeColor(props.location.pathname);
    return <WrappedComponent color={color} {...props} />;
  };
  Theme.propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };
  return Theme;
};

export default ThemeHOC;
