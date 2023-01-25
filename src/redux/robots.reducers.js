import { CHANGE_SEARCH_FIELD } from './robots.types';

const initState = {
  searchField: ''
};

export const searchRobots = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: payload
      };

    default:
      return state;
  }
};
