import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function Icones({ src, text }) {
  return (
    <Container>
      <img src={src} alt="" />
      <p>{text}</p>
    </Container>
  );
}
Icones.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Icones;
