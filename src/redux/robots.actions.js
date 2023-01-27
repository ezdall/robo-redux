import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from './robots.types';

// const localUrl = 'http://localhost:3000/robots' - if using server
const dummyUrl = 'https://jsonplaceholder.typicode.com/users';

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

// using redux-thunk, inception
export const requestRobots = () => dispatch => {
  // loading
  dispatch({
    type: REQUEST_ROBOTS_PENDING
  });

  return fetch(dummyUrl)
    .then(resp => resp.json())
    .then(data =>
      dispatch({
        type: REQUEST_ROBOTS_SUCCESS,
        payload: data
      })
    )
    .catch(error => {
      const errorMsg =
        typeof error.message === 'string' ? error.message : 'Error!..';
      dispatch({
        type: REQUEST_ROBOTS_FAILED,
        payload: errorMsg
      });
    });
};
