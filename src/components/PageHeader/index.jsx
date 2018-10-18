import React from 'react';
import './style.scss';

import logo from './logo.png';

const PageHeader = () =>
  <div className="PageHeader">
    <h1 className="title">
      <img src={logo}/>
      <span>Open Arcade</span>
    </h1>
  </div>

export default PageHeader;
