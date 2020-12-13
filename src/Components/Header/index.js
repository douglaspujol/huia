import React from 'react';
import Logo from '../../assets/logo.png';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo MaxDoctor" />
      <h3>
        a plataforma de compra direta
        <br /> do seu anestésico tópico
      </h3>
    </Container>
  );
}

export default Header;
