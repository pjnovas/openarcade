import './style.scss';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import get from 'lodash/get';

import guide from '/guide';

import Step from '/components/Step';

// Reducer

export const reducer = () => guide;

// Component

const Steps = ({
  steps
}) =>
  <div className="Steps">
    {steps.map(item => <Step key={item.id} {...item}/>)}
  </div>

Steps.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object)
};

export const mapStateToProps = state => ({
  steps: state.guide.steps.map(step => ({
    ...step,
    content: get(state, `guide.content.${step.id}.${state.intl.current}`, '[CONTENT NOT FOUND]')
  }))
});

export default connect(mapStateToProps)(Steps);
