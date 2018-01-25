import { createSelector } from 'reselect';

export default createSelector(
  state => state,
  (state, props) => props,
  (state, props) => ({ state, props }),
);
