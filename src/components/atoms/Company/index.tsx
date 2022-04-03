import React from 'react';
import capitalize from 'utils/capitalize';
import './Company.scss';
import cn from 'classnames';

type CompanyPropsType = {
  url?: string;
  company: string;
  className?: string;
};

const Company = ({ url, company, className }: CompanyPropsType) => {
  const handleNavigateToCompany = (e: any) => {
    e.stopPropagation();
    if (url) {
      window.location.href = url;
    }
  };
  return (
    <p onClick={handleNavigateToCompany} className={cn('company', className)}>
      {capitalize(company)}
    </p>
  );
};

export default Company;
