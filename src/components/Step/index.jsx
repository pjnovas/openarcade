import './style.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import get from 'lodash/get';
import Text, {getTranslations} from '/components/Text';
import marked from 'marked';
import Helmet from 'react-helmet';

const isLeftClickEvent = event => event.button === 0;
const isModifiedEvent = event => !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

const Step = ({
  id,
  content,
  onClick,
  stepName
}) =>
  <section className="Step">
    <Helmet>
      <title>Open Arcade - {stepName}</title>
    </Helmet>
    <h2><Text id={`guide.steps.${id}.title`}/></h2>
    <div
      className="content"
      dangerouslySetInnerHTML={{__html: marked(content)}}
      onClick={onClick}
      />
  </section>

Step.propTypes = {
  id: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.func,
  stepName: PropTypes.string
};

export const mapStateToProps = (state, ownProps) => ({
  stepName: get(getTranslations(state.intl.current), `guide.steps.${ownProps.id}.title`)
});

export const mapDispatchToProps = dispatch => ({
  onClick: event => {
    if (isLeftClickEvent(event) &&!isModifiedEvent(event)) {
      switch(event.target.tagName) {
        /*
        case 'IMG': {
            console.log('IMAGE', {
              src: event.target.src
            })
          break;
        }
        */
        case 'A': {
          if (event.target.host !== window.location.host) {
            return; // cancel catch
          }

          if (event.target.pathname.includes('.stl')) {
            event.preventDefault();
            dispatch({ type: 'STL_VIEWER_OPEN', payload: event.target.pathname })
          }

          break;
        }
      }

    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Step);
