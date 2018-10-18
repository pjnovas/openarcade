import React from 'react';
import './style.scss';

import PageHeader from '/components/PageHeader';
import Text from '/components/Text';
import Icon from '/components/Icon';

const Hero = () =>
  <div className="Hero">
    <div>
      <PageHeader/>
      <div className="hero-content">
        <p><Text id="hero.intro"/></p>
        <ul className="features">
          {[
            'small-size',
            'versatile',
            'plug',
            'joystick',
            'diy'
          ].map(key =>
            <li key={key}>
              <Icon name={key}/>
              <h4><Text id={`hero.features.${key}.title`}/></h4>
              <p><Text id={`hero.features.${key}.desc`}/></p>
            </li>
          )}
        </ul>
        <a className="continue">
          <Icon name="arrow-down"/>
        </a>
      </div>
    </div>
  </div>

export default Hero;
