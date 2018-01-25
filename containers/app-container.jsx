import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import createBemClass from 'react-bem-builder';

const AppContainer = ({ block, children }) => (
  <div className={block()}>
    {children}
  </div>
);

AppContainer.defaultProps = {
  block: createBemClass('application'),
};

export default connect(state => ({ state }))(withRouter(AppContainer));
