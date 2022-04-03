import React from 'react';
import PropsType from './types/PropsType';

const Else = ({ children, render }: PropsType) =>
  render ? render() : children;

export default Else;
