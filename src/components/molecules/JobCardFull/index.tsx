import React, { useEffect, useState } from 'react';
import './JobCardFull.scss';
import { useNavigate, useParams } from 'react-router';
import { Navigate } from 'react-router-dom';
import { getJobOne, updateJobOne } from 'queries';
import PATHS from 'routes/PATHS';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Title,
  Loader,
  Location,
  Date,
  Button,
  Applied,
  Company,
  WorkType,
} from 'components/atoms';
import { IJob } from 'types';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const JobCardFull = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [jobData, setJobData] = useState<IJob>();
  const [appliedState, setAppliedState] = useState(false);

  if (!id) return <Navigate to={PATHS.JOBSLIST} />;

  useEffect(() => {
    getJobOne(Number(id), setJobData);
  }, [id, appliedState]);

  return (
    <div className="card">
      <div className="card__return-box">
        <Button onClick={() => navigate(-1)} className="card__return">
          <FontAwesomeIcon icon={faAngleLeft} />
        </Button>
      </div>
      {jobData ? (
        <div className="card__content">
          <div className="card__header-content">
            <Title className="card__title">{jobData.title}</Title>
            <Company
              className="card__company"
              company={jobData.company}
              url={jobData.url}
            />
            <Location className="card__location" text={jobData.location} />
            <Date date={jobData.published} />
            <WorkType className="card__work-type" type={jobData.type} />
            {jobData.applied ? (
              <Applied className="card__applied applied-absolute" />
            ) : (
              <Button
                onClick={() => updateJobOne(Number(id), setAppliedState)}
                className="card__apply apply-absolute"
              >
                Apply
              </Button>
            )}
          </div>
          <p className="card__description">{jobData.description}</p>
          <div className="card__apply-box">
            {jobData.applied ? (
              <Applied className="card__applied" />
            ) : (
              <Button
                onClick={() => updateJobOne(Number(id), setAppliedState)}
                className="card__apply"
              >
                Apply
              </Button>
            )}
          </div>
        </div>
      ) : (
        <Loader width={150} height={150} />
      )}
    </div>
  );
};

export default JobCardFull;
