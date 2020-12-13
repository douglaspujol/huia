import React from 'react';

import { Container } from './styles';
import FormLogin from '../../Components/FormLogin/index';
import Beneficios from '../../Components/Beneficios/index';
import Header from '../../Components/Header/index';

function Doctor() {
  return (
    <Container>
      <div className="backgroundApp">
        <Header />
        <FormLogin />
        <Beneficios />
      </div>
    </Container>
  );
}

export default Doctor;
