import { Dispatch, SetStateAction } from 'react';
import { IJob } from '../types';

const getJobOne = (
  id: number,
  sendData: Dispatch<SetStateAction<IJob | undefined>>
) =>
  fetch(`https://infinite-mesa-21652.herokuapp.com/jobslist/${id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((result) => sendData(result))
    .catch(({ name, message }) => console.error(`Error ${name}: ${message}`));

export default getJobOne;
