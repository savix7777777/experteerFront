import React, { CSSProperties } from 'react';
import cn from 'classnames';

import './Title.scss';

type TitlePropsType = {
  children: HTMLParagraphElement | string;
  styles?: CSSProperties;
  className?: string;
};

const Title = ({ styles, className, children, ...props }: TitlePropsType) => (
  <p style={{ ...styles }} className={cn('title', className)} {...props}>
    {children}
  </p>
);

export default Title;
