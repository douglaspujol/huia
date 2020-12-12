import React from 'react';
import Logo from '../../assets/logo.png';

import { Container, HeaderApp } from './styles';
import FormLogin from '../../Components/FormLogin/index';
import Beneficios from '../../Components/Beneficios/index';

function Doctor() {
  return (
    <Container>
      <div className="backgroundApp">
        <HeaderApp>
          <img src={Logo} alt="Logo MaxDoctor" />
          <h3>
            a plataforma de compra direta
            <br /> do seu anestésico tópico
          </h3>
        </HeaderApp>
        <FormLogin />
        <Beneficios />
      </div>
    </Container>
  );
}

export default Doctor;
