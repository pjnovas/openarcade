import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './style.scss';

import Waypoint from 'react-waypoint';
import Text from '/components/Text';
import ExplodedMap from '/components/ExplodedMap';
import {SHOW_EXPLORER_BAR, HIDE_EXPLORER_BAR} from '/components/ExplorerBar';

// Reducer

const OPEN_BOX = 'OPEN_BOX';

export const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case OPEN_BOX: return {...state, isOpen: true};
    default: return state;
  }
};

// Component

const GuideMenu = ({
  isOpen,
  clickOpen,
  onEnterSection,
  onLeaveSection
}) =>
  <div className="GuideMenu">
    <Waypoint onEnter={onEnterSection} onLeave={onLeaveSection}/>
    {isOpen
      ? <ExplodedMap />
      : <div className="closedBox">
          <a onClick={clickOpen}>
            <Text id="assembly.open"/>
          </a>
        </div>
    }
  </div>

GuideMenu.propTypes = {
  isOpen: PropTypes.bool,
  clickOpen: PropTypes.func,
  onEnterSection: PropTypes.func,
  onLeaveSection: PropTypes.func
};

export const mapStateToProps = state => state.guideBox;

export const mapDispatchToProps = dispatch => ({
  clickOpen: () => dispatch({ type: OPEN_BOX }),
  onEnterSection: () => dispatch({ type: SHOW_EXPLORER_BAR }),
  onLeaveSection: () => dispatch({ type: HIDE_EXPLORER_BAR }),
});

export default connect(mapStateToProps, mapDispatchToProps)(GuideMenu);
