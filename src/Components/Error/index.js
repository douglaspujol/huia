import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function Error({ message }) {
  return <Container>{message}</Container>;
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Error;
