import { IJob } from 'types';

export type JobsState = {
  jobsList: Array<IJob>;
};

const initialState: JobsState = {
  jobsList: [],
};

export default initialState;
