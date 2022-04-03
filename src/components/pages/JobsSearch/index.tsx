import React, { Dispatch, useEffect } from 'react';
import { IJob } from 'types';
import { Title, Loader } from 'components/atoms';
import FiltersPanel from 'components/molecules/FiltersPanel';
import JobsCardList from 'components/molecules/JobsCardList';
import './JobSearch.scss';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { StoreState } from 'redux/types/type';
import Condition, {
  Else,
  ElseIf,
  If,
} from 'components/hoc/Conditional/Condition';
import { createJobsList } from 'redux/actions/actionCreator';

const JobsSearch = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const jobs: Array<IJob> = useSelector(
    ({ jobsList }: StoreState) => jobsList,
    shallowEqual
  );

  useEffect(() => {
    if (jobs && !jobs.length) {
      dispatch(createJobsList({ query: '', location: '' }));
    }
  }, []);

  return (
    <div className="job-search">
      <Title className="job-search__title">Welcome to DevJobs</Title>
      <FiltersPanel />
      {/* @ts-ignore */}
      <Condition condition={Boolean(jobs && jobs.length)}>
        <If>
          <JobsCardList data={jobs} />
        </If>
        <ElseIf condition={Boolean(jobs.length === 0)}>
          <Title className="job-search__no-matches">No matches</Title>
        </ElseIf>
        <Else>
          <Loader width={150} height={150} />
        </Else>
      </Condition>
    </div>
  );
};

export default JobsSearch;
