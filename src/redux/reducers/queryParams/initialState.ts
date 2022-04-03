export type queryParamsType = {
  query: string;
  location: string;
};

const initialState: queryParamsType = {
  query: '',
  location: '',
};

export default initialState;
