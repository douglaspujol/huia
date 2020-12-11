import styled from 'styled-components';
import Background from '../../assets/background.png';

export const Container = styled.div`
  margin: 0 auto;
  div.test {
    background: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 500px;
    height: 900px;
  }
`;
