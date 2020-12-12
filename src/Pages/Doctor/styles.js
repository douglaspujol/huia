import styled from 'styled-components';
import Background from '../../assets/background.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  div.backgroundApp {
    padding: 15px;
    border: 5px solid #fff;
    border-radius: 15px;
    background: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 500px;
    height: 900px;
    box-shadow: 2px 3px 3px rgba(0, 0, 2, 0.15);
  }
`;
export const HeaderApp = styled.header`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 150px;
  }
  h3 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 00;
    color: #8a6fab;
    margin: 15px 0;
  }
`;
