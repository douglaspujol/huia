import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  img {
    max-width: 60px;
  }
  p {
    margin-top: 4px;
    text-align: center;
    max-width: 110px;
  }
`;
