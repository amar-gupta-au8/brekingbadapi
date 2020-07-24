import { ACTIONS } from '../Actions/index';

const { MAKE_REQUEST, ERROR, GET_DATA, SEARCH_DATA } = ACTIONS;

const intialState = {
  loading: true,
  items: [],
};
export default (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MAKE_REQUEST:
      return { loading: true, items: [...state.items] };
    case GET_DATA:
      return { loading: false, items: [...state.items, payload] };
    case SEARCH_DATA:
      return { loading: false, items: [] };
    case ERROR:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
