import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import WrapperRoutes from './Routes/Routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <WrapperRoutes />
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
