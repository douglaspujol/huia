import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../Pages/Main/index';
import Doctor from '../Pages/Doctor/index';
import Page404 from '../Pages/Page404/index';

function WrapperRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/maxdoctor" element={<Doctor />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}
export default WrapperRoutes;
