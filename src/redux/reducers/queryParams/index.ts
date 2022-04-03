import initialState, {
  queryParamsType,
} from 'redux/reducers/queryParams/initialState';
import { queryParamsAction } from 'redux/types/type';
import { SET_QUERY_PARAMS } from 'redux/actions';

export default (
  state: queryParamsType = initialState,
  action: queryParamsAction
) => {
  switch (action?.type) {
    case SET_QUERY_PARAMS:
      return action.queryParams;
    default:
      return state;
  }
};
