import React from 'react';
import PropsType from './types/PropsType';

const ElseIf = ({ children, render }: PropsType) =>
  render ? render() : children;

ElseIf.defaultProps = {
  condition: false,
};

export default ElseIf;
