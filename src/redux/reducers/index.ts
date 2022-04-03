// @ts-ignore
import { combineReducers } from 'redux';
import jobsList from './jobsList';
import queryParams from './queryParams';

export default combineReducers({
  jobsList,
  queryParams,
});
