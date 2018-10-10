import React from 'react';

import Hero from '/components/Hero';

import LanguageSelector from '/components/LanguageSelector';
import GuideMenu from '/components/GuideMenu';
import ExplorerBar from '/components/ExplorerBar';
import Steps from '/components/Steps';

const App = () => (
  <div className="App">
    <LanguageSelector />
    <Hero />
    <GuideMenu/>
    <ExplorerBar />
    <Steps/>
  </div>
);

export default App;
