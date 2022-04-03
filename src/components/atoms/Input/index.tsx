import React, { ComponentPropsWithoutRef, forwardRef } from 'react';

import cn from 'classnames';

import './Input.scss';

type InputProps = ComponentPropsWithoutRef<'input'> & {};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
    const { className } = props;

    return (
      <input
        {...props}
        ref={ref}
        type={type || 'text'}
        className={cn('input', className)}
      />
    );
  }
);

export default Input;
