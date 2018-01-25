import React, { Component } from 'react';
import { connect } from 'react-redux';
import createBemClass from 'react-bem-builder';

import { BoardActions } from 'actions';
import { boardSelector } from 'selectors';

export class BoardContainer extends Component {
  static defaultProps = {
    block: createBemClass('board'),
  }

  render() {
    const { block } = this.props;

    return (
      <div className={block()}>
        <h1 className={block('heading')}>Board</h1>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    board: boardSelector(state, props),
  }), {
    ...BoardActions,
  },
)(BoardContainer);
