import './style.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import last from 'lodash/last';

import Viewer from 'stl-viewer';
import Text from '/components/Text';

// Reducer

const STL_VIEWER_OPEN = 'STL_VIEWER_OPEN';
const STL_VIEWER_CLOSE = 'STL_VIEWER_CLOSE';

export const reducer = (state = {
  visible: false,
  url: ''
}, action = {}) => {
  switch (action.type) {
    case STL_VIEWER_OPEN: return {...state, visible: true, url: action.payload};
    case STL_VIEWER_CLOSE: return {...state, visible: false};
    default: return state;
  }
};

// Component

const STLViewer = ({
  id,
  visible,
  url,
  onClose
}) => visible ?
  <div className="STLViewer">
    <div>
      <div>
        <h2><Text id={`stl.${id}.label`}/></h2>
        <a className="close" onClick={onClose}>x</a>
        <div className="content">
          <Viewer
            url={url}
            width={400}
            height={400}
            cameraY={30}
            modelColor='#2673af'
            backgroundColor='#EAEAEA'
            orbitControls
            rotationSpeeds={[0, 0.02, 0]}
          />
        </div>
        <div className="footer">
          <a className="primary" href={url}><Text id="app.download"/></a>
          <a className="link" onClick={onClose}><Text id="app.close"/></a>
        </div>
      </div>
    </div>
  </div>
  : null

STLViewer.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
  visible: PropTypes.bool,
  onClose: PropTypes.func
};

export const mapStateToProps = ({stlViewer}) => ({
  ...stlViewer,
  id: last(stlViewer.url.split('/')).replace('.stl', '')
});

export const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch({type: STL_VIEWER_CLOSE})
});

export default connect(mapStateToProps, mapDispatchToProps)(STLViewer);
