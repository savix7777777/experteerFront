import { Dispatch, SetStateAction } from 'react';

const updateJobOne = (
  id: number,
  sendData: Dispatch<SetStateAction<boolean>>
) =>
  fetch(`https://infinite-mesa-21652.herokuapp.com/jobslist/${id}`, {
    method: 'PUT',
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((result) => sendData(result))
    .catch(({ name, message }) => console.error(`Error ${name}: ${message}`));

export default updateJobOne;
