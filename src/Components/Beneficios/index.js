import React from 'react';
import Carrinho from '../../assets/compras.svg';
import Limitada from '../../assets/limitada.svg';
import Caminhao from '../../assets/caminhao.svg';
import Moto from '../../assets/moto.svg';
import Sofa from '../../assets/sofa.svg';
import { Container } from './styles';

function Beneficios() {
  return (
    <Container>
      <div className="primeiro">
        <div>
          <img src={Carrinho} alt="" />
          <p>
            FACILIDADE
            <br /> DE COMPRA
          </p>
        </div>
        <div>
          <img src={Limitada} alt="" />
          <p>
            QUANTIDADE
            <br /> NÃO LIMITADA
          </p>
        </div>
      </div>
      <div className="segundo">
        <div>
          <img src={Caminhao} alt="" />
          <p>FRETE GRÁTIS</p>
        </div>
        <div>
          <img src={Moto} alt="" />
          <p>AGILIDADE</p>
        </div>
        <div>
          <img src={Sofa} alt="" />
          <p>COMODIDADE</p>
        </div>
      </div>
    </Container>
  );
}

export default Beneficios;
