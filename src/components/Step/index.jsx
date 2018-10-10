import './style.scss';
import React from 'react';
import PropTypes from 'prop-types';

import Text from '/components/Text';
import marked from 'marked';

// Component

const Step = ({
  title,
  content
}) =>
  <section className="Step">
    <h2><Text id={title}/></h2>
    <div className="carousel">[Carousel]</div>
    <div className="content" dangerouslySetInnerHTML={{__html: marked(content)}} />
  </section>

Step.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

export default Step;
