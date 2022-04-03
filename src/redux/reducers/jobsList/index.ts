import { JobsAction } from 'redux/types/type';
import { CLEAR_JOBS_LIST, GET_JOBS_LIST } from 'redux/actions';
import initialState, { JobsState } from './initialState';

export default (state: JobsState = initialState, action: JobsAction) => {
  switch (action?.type) {
    case GET_JOBS_LIST:
      return action.jobsList;
    case CLEAR_JOBS_LIST:
      return { jobsList: [] };
    default:
      return state;
  }
};
