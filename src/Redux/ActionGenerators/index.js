import axios from 'axios';
import { ACTIONS } from '../Actions/index';
const { MAKE_REQUEST, ERROR, GET_DATA, SEARCH_DATA } = ACTIONS;

export const makeRequest = () => ({
  type: MAKE_REQUEST,
});
export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});
export const searchData = () => ({
  type: SEARCH_DATA,
});
export const error = (payload) => ({
  type: ERROR,
  payload,
});
export const fetchData = (userInput = '') => {
  return (dispatch) => (
    // eslint-disable-next-line
    dispatch(makeRequest),
    axios
      .get(`https://www.breakingbadapi.com/api/characters?name=${userInput}`)
      .then((res) => res.data.map((data) => dispatch(getData(data))))
      .catch((err) => dispatch(error(err)))
  );
};

