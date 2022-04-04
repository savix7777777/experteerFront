import React, { ChangeEvent, Dispatch } from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button } from 'components/atoms';
import { SearchParamsType } from 'types';
import './FiltersPanel.scss';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  clearJobsList,
  createJobsList,
  createQueryParams,
} from 'redux/actions/actionCreator';
import { StoreState } from 'redux/types/type';

const FiltersPanel = () => {
  const { register, handleSubmit } = useForm<SearchParamsType>();

  const dispatch: Dispatch<any> = useDispatch();

  const onSubmit = (params: SearchParamsType) => {
    dispatch(clearJobsList());
    dispatch(createJobsList(params));
  };

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (name === 'query') {
      dispatch(
        createQueryParams({ query: value, location: searchParams.location })
      );
    } else if (name === 'location') {
      dispatch(
        createQueryParams({ query: searchParams.query, location: value })
      );
    }
  };

  const searchParams: SearchParamsType = useSelector(
    ({ queryParams }: StoreState) => queryParams,
    shallowEqual
  );

  return (
    <form className="filters-panel" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Location"
        className="filters-panel__input"
        {...register('location')}
        onChange={(e) => {
          handleChange(e);
        }}
        value={searchParams?.location}
      />
      <Input
        placeholder="Find your dream job now"
        className="filters-panel__input"
        {...register('query')}
        onChange={handleChange}
        value={searchParams?.query}
      />
      <Input className="filters-panel__submit" type="submit" value="Search" />
    </form>
  );
};

export default FiltersPanel;
