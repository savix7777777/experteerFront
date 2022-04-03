import React from 'react';

import './JobsCardList.scss';
import { IJob } from 'types';
import JobCard from 'components/molecules/JobCard';

type JobsCardListPropsType = {
  data: Array<IJob>;
};

const JobsCardList = ({ data }: JobsCardListPropsType) => (
  <div className="jobs-card-list">
    {data.map(({ guid, ...item }, index) => (
      <JobCard guid={guid} {...item} key={`${guid}+${index + 1}`} />
    ))}
  </div>
);

export default JobsCardList;
