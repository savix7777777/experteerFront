import React from 'react';
import { Outlet } from 'react-router-dom';

import './Layout.scss';

function Layout() {
  return (
    <div className="layout">
      <div className="layout__bci" />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
