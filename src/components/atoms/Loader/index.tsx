import React, { ComponentPropsWithoutRef } from 'react';
import cn from 'classnames';

import './Loader.scss';
import Title from '../Title';

type DefaultLoaderProps = {
  width: number;
  height: number;
};

type LoaderPropsType = ComponentPropsWithoutRef<'div'> & DefaultLoaderProps;

const Loader = ({ className, width, height }: LoaderPropsType) => (
  <div className="loader-box">
    <Title className="loader__title">Your results will appear here</Title>
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className={cn('loader', className)}
    >
      {' '}
    </div>
  </div>
);

export default Loader;
