import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

function Main() {
  return (
    <Container>
      <h2>Avaliação de Douglas Pujol</h2>
      <Link to="/maxdoctor">Acessar MaxDoctor</Link>
    </Container>
  );
}

export default Main;
