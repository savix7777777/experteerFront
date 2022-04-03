import { SearchParamsType } from 'types';
import { getJobsList } from 'queries';
import { CLEAR_JOBS_LIST, GET_JOBS_LIST, SET_QUERY_PARAMS } from './index';
import { DispatchJobsType } from '../types/type';

export const createJobsList =
  (payload: SearchParamsType) => (dispatch: DispatchJobsType) => {
    getJobsList(
      payload?.query || '',
      dispatch,
      GET_JOBS_LIST,
      payload?.location || ''
    );
  };

export const clearJobsList = () => ({ type: CLEAR_JOBS_LIST });

export const createQueryParams = (payload: SearchParamsType) => ({
  type: SET_QUERY_PARAMS,
  queryParams: payload,
});
