import './style.scss';
import React from 'react';
import PropTypes from 'prop-types';

import Text from '/components/Text';
import marked from 'marked';

const isLeftClickEvent = event => event.button === 0;
const isModifiedEvent = event => !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

const onClick = event => {
  if (
    event.target.tagName === 'A' &&
    isLeftClickEvent(event) &&
    !isModifiedEvent(event) &&
    event.target.host === window.location.host
  ) {
    event.preventDefault();

    // TODO: check for STL file
    console.log('CLICKED!', {
      pathname: event.target.pathname,
      search: event.target.search,
    });
  }
}

const Step = ({
  id,
  content
}) =>
  <section className="Step">
    <h2><Text id={`guide.steps.${id}.title`}/></h2>
    <div
      className="content"
      dangerouslySetInnerHTML={{__html: marked(content)}}
      onClick={onClick}
      />
  </section>

Step.propTypes = {
  id: PropTypes.string,
  content: PropTypes.string
};

export default Step;
