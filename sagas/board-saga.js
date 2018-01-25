import { take, fork } from 'redux-saga/effects';

import { BoardActionTypes } from 'constants/action-types';
import { BoardActions } from 'actions';

export function* sampleBoardSaga() {
  return yield BoardActions;
}

export default function* entitiesFlow() {
  while (true) {
    const { type, payload } = yield take([
      BoardActionTypes.SAMPLE,
    ]);

    switch (type) {
      case BoardActionTypes.SAMPLE:
        yield fork(sampleBoardSaga, payload);
        break;
    }
  }
}
