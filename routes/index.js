import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { AppContainer, BoardContainer } from 'containers';

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={BoardContainer} />
  </Route>
);
