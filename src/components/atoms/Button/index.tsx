import React, { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';

import cn from 'classnames';

import './Button.scss';

type DefaultButtonType = {
  type?: string;
};

export type ButtonProps = ComponentPropsWithoutRef<'button'> &
  DefaultButtonType;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }: ButtonProps, ref) => {
    const { disabled, className, type, ...otherProps } = props;

    return (
      <button
        {...otherProps}
        ref={ref}
        type={type || 'button'}
        disabled={disabled}
        className={cn('button', className, {
          disabled,
        })}
      >
        {children}
      </button>
    );
  }
);

export default Button;
