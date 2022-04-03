import React from 'react';

import './Date.scss';

type DatePropsType = {
  date: Date;
};

const Date = ({ date }: DatePropsType) => {
  const newDate: Date = new window.Date(date);
  return (
    <p className="date">
      {`${newDate.getDay()} ${newDate.toLocaleString('en-US', {
        month: 'short',
      })} ${newDate.getFullYear()}`}
    </p>
  );
};

export default Date;
