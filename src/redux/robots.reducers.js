import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from './robots.types';

const initSearchState = {
  searchField: ''
};

export const searchRobots = (state = initSearchState, action) => {
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

//

const initRobotState = {
  isLoading: false,
  error: null,
  robots: []
};

export const robotReducers = (state = initRobotState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isLoading: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: payload, isLoading: false };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
