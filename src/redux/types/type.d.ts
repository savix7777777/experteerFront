import { IJob } from 'types';
import { queryParamsType } from 'reducers/queryParams/initialState';

type StoreState = {
  jobsList: Array<IJob>;
  queryParams: queryParamsType;
};

/* jobsList */

type JobsAction = {
  type: string;
  jobsList: Array<IJob>;
};

type DispatchJobsType = (args: JobsAction) => JobsAction;

/* queryParams */

type queryParamsAction = {
  type: string;
  queryParams: queryParamsType;
};

type Dispatch = (args: queryParamsAction) => queryParamsType;
