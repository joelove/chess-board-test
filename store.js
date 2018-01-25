import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from 'reducers/root-reducer';
import sagas from 'sagas';

export default function createStoreWithHistory(history) {
  const sagaMiddleware = createSagaMiddleware();

  const createStoreWithMiddleware = applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history),
  )(createStore);

  const store = createStoreWithMiddleware(rootReducer);

  sagaMiddleware.run(sagas);

  return store;
}
