import React from 'react';

import Hero from '/components/Hero';

import LanguageSelector from '/components/LanguageSelector';
import GuideMenu from '/components/GuideMenu';
import ExplorerBar from '/components/ExplorerBar';
import StepPage from '/components/StepPage';

import {Fragment} from 'redux-little-router';

const App = () => (
  <div className="App">
    <LanguageSelector />
    <Fragment forRoute="/">
      <div>
        <Fragment forRoute="/">
          <div>
            <Hero />
            <GuideMenu/>
            <ExplorerBar />
          </div>
        </Fragment>
        <Fragment forRoute="/guide/:name">
          <StepPage />
        </Fragment>
      </div>
    </Fragment>
  </div>
);

export default App;
