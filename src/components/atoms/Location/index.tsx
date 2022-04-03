import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import './Location.scss';
import cn from 'classnames';

type LocationPropsType = {
  text: string;
  className?: string;
};

const Location = ({ text, className }: LocationPropsType) => (
  <div className={cn('location', className)}>
    <FontAwesomeIcon className="location__icon" icon={faLocationDot} />
    <span className="location__text">{text}</span>
  </div>
);

export default Location;
