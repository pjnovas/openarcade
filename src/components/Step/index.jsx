import './style.scss';
import React from 'react';
import PropTypes from 'prop-types';

import Text from '/components/Text';
import marked from 'marked';

// Component

const Step = ({
  id,
  content
}) =>
  <section className="Step">
    <h2><Text id={`guide.steps.${id}.title`}/></h2>
    <div className="content" dangerouslySetInnerHTML={{__html: marked(content)}} />
  </section>

Step.propTypes = {
  id: PropTypes.string,
  content: PropTypes.string
};

export default Step;
