import React, { Component } from 'react';
import { connect } from 'react-redux';
import createBemClass from 'react-bem-builder';
import { map } from 'lodash';
import { BoardActions } from 'actions';
import { boardSelector } from 'selectors';

import './board-container.scss';

const ranks = [8, 7, 6, 5, 4, 3, 2, 1];
const files = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export class BoardContainer extends Component {
  static defaultProps = {
    block: createBemClass('board'),
  }

  renderBoardSquares() {
    const { block } = this.props;

    return map(ranks, rank => (
      <tr className={block('rank')} key={rank}>
        {map(files, file => (
          <td className={block('square')} key={file} id={file + rank} />
        ))}
      </tr>
    ));
  }

  render() {
    const { block } = this.props;

    return (
      <table className={block()}>
        <tbody>
          {this.renderBoardSquares()}
        </tbody>
      </table>
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
