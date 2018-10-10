import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Icon = ({name}) => <i className={`icon-${name}`} />

Icon.propTypes = {
  name: PropTypes.string
};

export default Icon;
