import React from 'react';

import './Applied.scss';
import cn from 'classnames';

type AppliedPropsType = {
  className?: string;
};

const Applied = ({ className }: AppliedPropsType) => (
  <div className={cn('applied', className)}>Applied</div>
);

export default Applied;
