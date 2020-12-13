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
    width: 100%;
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
    width: 100%;
    margin: 15px 0;
  }
`;
