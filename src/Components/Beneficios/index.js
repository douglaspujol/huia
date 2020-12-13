import React from 'react';
import Carrinho from '../../assets/compras.svg';
import Limitada from '../../assets/limitada.svg';
import Caminhao from '../../assets/caminhao.svg';
import Moto from '../../assets/moto.svg';
import Sofa from '../../assets/sofa.svg';
import { Container } from './styles';
import Icones from './Icones/Icones';

function Beneficios() {
  return (
    <Container>
      <div className="primeiro">
        <Icones src={Carrinho} text="FACILIDADE DE COMPRA" />
        <Icones src={Limitada} text="QUANTIDADE NÃO LIMITADA" />
      </div>
      <div className="segundo">
        <Icones src={Caminhao} text="FRETE GRÁTIS" />
        <Icones src={Moto} text="AGILIDADE" />
        <Icones src={Sofa} text="COMODIDADE" />
      </div>
    </Container>
  );
}

export default Beneficios;
