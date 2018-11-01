import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './style.scss';

import Text from '/components/Text';
import {Link} from 'redux-little-router';

// Reducer

export const SHOW_EXPLORER_BAR = 'SHOW_EXPLORER_BAR';
export const HIDE_EXPLORER_BAR = 'HIDE_EXPLORER_BAR';
export const SET_EXPLORER_BAR = 'SET_EXPLORER_BAR';
export const CLEAR_EXPLORER_BAR = 'CLEAR_EXPLORER_BAR';

export const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case SET_EXPLORER_BAR: return {...state, id: action.payload};
    case CLEAR_EXPLORER_BAR: return {...state, id: action.payload === state.id ? '' : state.id};
    case SHOW_EXPLORER_BAR: return {...state, visible: true}
    case HIDE_EXPLORER_BAR: return {...state, visible: false}
    default: return state;
  }
};

// Component

const ExplorerBar = ({visible, id}) =>
  visible ?
    <Fragment>
      {
        <div className="ExplorerBar">
          <Text id={id}/>
        </div>
      }
      <Link className="GuideLink" href='/guide'>
        <Text id="assembly.gotoguide"/>
      </Link>
    </Fragment>
    : null

ExplorerBar.propTypes = {
  visible: PropTypes.bool,
  id: PropTypes.string
};

export const mapStateToProps = state => state.explorerBar;

export default connect(mapStateToProps)(ExplorerBar);
