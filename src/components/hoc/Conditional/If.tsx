import React from 'react';
import PropsType from './types/PropsType';

const If = ({ children, render }: PropsType) => (render ? render() : children);

export default If;
