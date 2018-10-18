import './style.scss';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import get from 'lodash/get';

import guide from '/guide';

import StepsSideMenu from '/components/StepsSideMenu';
import PageHeader from '/components/PageHeader';

import Step from '/components/Step';
import Text from '/components/Text';

// Reducer

export const reducer = () => guide;

// Component

const StepPage = ({
  step
}) =>
  <div className="StepPage">
    <PageHeader />
    <StepsSideMenu />
    {step ?
      <Step {...step}/>
    :
      <p className="not-found">
        <Text id="guide.step_not_found"/>
      </p>
    }
  </div>

StepPage.propTypes = {
  step: PropTypes.object
};

export const mapStateToProps = state => {
  let step = get(state, 'router.params.name');
  let steps = get(state, 'guide.steps', []);

  return {
    steps,
    step: steps.includes(step) && {
      id: step,
      content: get(state, `guide.content.${step}.${state.intl.current}`, '[CONTENT NOT FOUND]')
    }
  }
};

export default connect(mapStateToProps)(StepPage);
