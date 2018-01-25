import { fork } from 'redux-saga/effects';

import boardSaga from 'sagas/board-saga';

export default function* sagas() {
  yield [
    fork(boardSaga),
  ];
}
