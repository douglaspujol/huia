import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  form {
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    label {
      display: flex;
      margin: 5px 0;
      padding: 10px 0;
      width: 100%;
      align-items: center;
      border-bottom: 1px solid #8a6fab;
      input {
        color: #8a6fab;
        border: none;
        padding: 10px;
        background: transparent;
        margin-left: 15px;
        width: 100%;
      }
      select {
        color: #8a6fab;
        border: none;
        padding: 10px;
        background: transparent;
        margin-left: 28px;
        width: 100%;
      }
    }
    button {
      margin: 15px 0;
      border-radius: 5px;
      border: none;
      width: 100%;
      padding: 15px;
      background: #8a6fab;
      color: #fff;
      transition: 0.2s;
      &:hover {
        background: rgb(101, 64, 145);
      }
      &:disabled {
        background: rgb(209, 200, 219);
        cursor: not-allowed;
      }
    }
  }
  span {
    text-align: center;
    color: #8a6fab;
    line-height: 1.5;
  }
`;
