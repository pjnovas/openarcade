import React from 'react';
import './style.scss';

import logo from './logo.png';
import Text from '/components/Text';
import Icon from '/components/Icon';

const Hero = () =>
  <div className="Hero">
    <div>
      <h1 className="title">
        <img src={logo}/>
        <span>Open Arcade</span>
      </h1>
      <div className="hero-content">
        <p><Text id="hero.intro"/></p>
        <ul className="features">
          <li>
            <Icon name="small-size"/>
            <h4><Text id="hero.features.small_size.title"/></h4>
            <p><Text id="hero.features.small_size.desc"/></p>
          </li>
          <li>
            <Icon name="versatile"/>
            <h4><Text id="hero.features.versatile.title"/></h4>
            <p><Text id="hero.features.versatile.desc"/></p>
          </li>
          <li>
            <Icon name="plug"/>
            <h4><Text id="hero.features.plug_and_play.title"/></h4>
            <p><Text id="hero.features.plug_and_play.desc"/></p>
          </li>
          <li>
            <Icon name="joystick"/>
            <h4><Text id="hero.features.joystick_mode.title"/></h4>
            <p><Text id="hero.features.joystick_mode.desc"/></p>
          </li>
          <li>
            <Icon name="diy"/>
            <h4><Text id="hero.features.diy.title"/></h4>
            <p><Text id="hero.features.diy.desc"/></p>
          </li>
        </ul>
        <a className="continue">
          <Icon name="arrow-down"/>
        </a>
      </div>
    </div>
  </div>

export default Hero;
