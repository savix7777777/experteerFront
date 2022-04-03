import React from 'react';
import './JobCard.scss';
import { IJob } from 'types';
import {
  Location,
  Title,
  Date,
  Applied,
  Company,
  WorkType,
} from 'components/atoms';
import { useNavigate } from 'react-router';
import PATHS from 'routes/PATHS';

const JobCard = ({
  title,
  location,
  company,
  description,
  applied,
  published,
  guid,
  url,
  type,
}: IJob) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${PATHS.JOBSLIST}/${guid}`);
  };

  return (
    <div className="job-card" onClick={handleNavigate}>
      <div className="job-card__title-box">
        <Title className="job-card__title">{`${title.substring(0, 100)} ${
          title.length > 100 ? '...' : ''
        }`}</Title>
        {applied && <Applied className="job-card__applied" />}
        <WorkType className="job-card__work-type" type={type} />
      </div>
      <Company className="job-card__company" url={url} company={company} />
      <span className="job-card__description">{`${description.substring(
        0,
        100
      )} ${description.length > 100 ? '...' : ''}`}</span>
      <Location text={location} />
      <Date date={published} />
    </div>
  );
};

export default JobCard;
