import { DispatchJobsType } from '../redux/types/type';

const getJobsList = (
  query: string,
  dispatch: DispatchJobsType,
  type: string,
  location?: string
) =>
  fetch(
    `https://infinite-mesa-21652.herokuapp.com/jobslist?query=${query}&location=${
      location || 'Munich'
    }`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((result) => {
      dispatch({ type, jobsList: result });
    })
    .catch(({ name, message }) => console.error(`Error ${name}: ${message}`));

export default getJobsList;
