import './style.scss';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import get from 'lodash/get';
import noop from 'lodash/noop';

import Text from '/components/Text';
import Icon from '/components/Icon';
import {Link} from 'redux-little-router';

// Reducer

const SIDE_MENU_TOGGLE_VISIBLE = 'SIDE_MENU_TOGGLE_VISIBLE';

export const reducer = (state = {visible: true, isMobile: false}, action = {}) => {
  switch (action.type) {
    case SIDE_MENU_TOGGLE_VISIBLE:
      return {...state, visible: action.payload};
    default: return state;
  }
};

// Component

const StepsSideMenu = ({
  current,
  steps,
  isMobile,
  visible,
  onClickOpen,
  onClickClose
}) =>
  <div className={`StepsSideMenu ${visible ? 'active' : ''}`}>
    <h3><Text id="guide.menu_title"/></h3>
    <nav>
    {steps.map(step =>
      <Link
        key={step}
        className={step === current ? 'active' : noop()} href={`/guide/${step}`}
        onClick={isMobile ? onClickClose : noop()}>

        <Text id={`guide.steps.${step}.menu`}/>
      </Link>
    )}
    </nav>

    {visible ?
      <a className="toggle close" onClick={onClickClose}>{'x'}</a>
      :
      <a className="toggle" onClick={onClickOpen}><Icon name="menu"/></a>
    }
  </div>

StepsSideMenu.propTypes = {
  current: PropTypes.string,
  steps: PropTypes.arrayOf(PropTypes.string),
  isMobile: PropTypes.bool,
  visible: PropTypes.bool,
  onClickOpen: PropTypes.func,
  onClickClose: PropTypes.func
};

export const mapStateToProps = state => ({
  ...get(state, 'sideMenu'),
  current: get(state, 'router.params.name'),
  steps: get(state, 'guide.steps', [])
});

export const mapDispatchToProps = dispatch => ({
  onClickOpen: () => dispatch({type: SIDE_MENU_TOGGLE_VISIBLE, payload: true}),
  onClickClose: () => dispatch({type: SIDE_MENU_TOGGLE_VISIBLE, payload: false})
});

export default connect(mapStateToProps, mapDispatchToProps)(StepsSideMenu);
