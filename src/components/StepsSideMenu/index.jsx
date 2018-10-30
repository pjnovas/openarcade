import './style.scss';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import get from 'lodash/get';
import noop from 'lodash/noop';

import Text from '/components/Text';
import Icon from '/components/Icon';
import {Link} from 'redux-little-router';
import * as locales from '/locales';

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

const MenuItem = ({ step, isMobile, onClickClose }) => (
  <Link
    onClick={e => {
      window.scroll({top: 0});
      if (isMobile) onClickClose(e);
    }}
    href={`/guide/${step}`}>
    <Text id={`guide.steps.${step}.menu`}/>
  </Link>
)

const MenuItemList = ({ hash, step, anchors }) => (
  <div className={`active ${anchors.length ? '' : 'empty'}`}>
    <h4><Text id={`guide.steps.${step}.menu`}/></h4>
    {anchors.length ?
      <nav>
        {anchors.map(({ref, label}) =>
          <a
            key={ref}
            href={`#${ref}`}
            className={`#${ref}` === hash ? 'selected' : ''}>
            {label}
          </a>
        )}
      </nav>
    : null }
  </div>
);

const StepsSideMenu = ({
  current,
  hash,
  anchors,
  steps,
  isMobile,
  visible,
  onClickOpen,
  onClickClose
}) =>
  <div className={`StepsSideMenu ${visible ? 'active' : ''}`}>
    <h3><Text id="guide.menu_title"/></h3>
    <nav>
      {steps.map(step => step === current
        ? <MenuItemList key={step} {...{step, anchors, hash}} />
        : <MenuItem key={step} {...{step, isMobile, onClickClose}} />
      )}
    </nav>

    {visible
      ? <a className="toggle close" onClick={onClickClose}>{'x'}</a>
      : <a className="toggle" onClick={onClickOpen}><Icon name="menu"/></a>
    }
  </div>

StepsSideMenu.propTypes = {
  current: PropTypes.string,
  hash: PropTypes.string,
  steps: PropTypes.arrayOf(PropTypes.string),
  anchors: PropTypes.arrayOf(PropTypes.shape({
    ref: PropTypes.string,
    label: PropTypes.string
  })),
  isMobile: PropTypes.bool,
  visible: PropTypes.bool,
  onClickOpen: PropTypes.func,
  onClickClose: PropTypes.func
};

export const mapStateToProps = state => {
  let current = get(state, 'router.params.name', 'intro');
  let locale = get(state, 'intl.current');
  return {
    ...get(state, 'sideMenu'),
    current,
    hash: get(state, 'router.hash'),
    steps: get(state, 'guide.steps', []),
    anchors: get(locales, `${locale}.guide.steps.${current}.anchors`, []).map(ref => ({
      ref,
      label: ref.split('-').map(word => word.charAt(0).toUpperCase() + word.substr(1)).join(' ')
    }))
  };
};

export const mapDispatchToProps = dispatch => ({
  onClickOpen: () => dispatch({type: SIDE_MENU_TOGGLE_VISIBLE, payload: true}),
  onClickClose: () => dispatch({type: SIDE_MENU_TOGGLE_VISIBLE, payload: false})
});

export default connect(mapStateToProps, mapDispatchToProps)(StepsSideMenu);
