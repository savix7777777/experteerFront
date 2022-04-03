import React from 'react';
import './WorkTipe.scss';
import cn from 'classnames';

type WortTypePropsType = {
  type: string;
  className?: string;
};

const WorkType = ({ type, className }: WortTypePropsType) => (
  <div
    className={cn('work-type', className, {
      'work-type__full-time': type === 'full-time',
      'work-type__part-time': type === 'part-time',
      'work-type__remote': type === 'remote',
    })}
  >
    <span>{type}</span>
  </div>
);

export default WorkType;
