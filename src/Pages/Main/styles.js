import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  h2 {
    margin: 15px 0;
    color: #303030;
  }
  a {
    background: #000;
    padding: 15px;
    color: #fff;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      transform: translateX(1px);
    }
  }
`;
