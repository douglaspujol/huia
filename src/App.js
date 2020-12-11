import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import WrapperRoutes from './Routes/Routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <WrapperRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
