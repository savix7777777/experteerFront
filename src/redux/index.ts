// @ts-ignore
import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/index';
import { StoreState } from './types/type';

const store: Store<StoreState> = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
