import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px auto;
  max-width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div.primeiro {
    display: flex;
    align-items: center;
    justify-content: space-around;
    div {
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  div.segundo {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  div {
    width: 100%;
    margin: 10px 0;
    div {
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
      }
    }
  }
`;
