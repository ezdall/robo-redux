import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from './robots.types';

// const localUrl = 'http://localhost:3000/robots' - if using server
const dummyUrl = 'https://jsonplaceholder.typicode.com/user';

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

  fetch(dummyUrl)
    .then(resp => resp.json())
    .then(data =>
      dispatch({
        type: REQUEST_ROBOTS_SUCCESS,
        payload: data
      })
    )
    .catch(error => {
      console.log(error);
      dispatch({
        type: REQUEST_ROBOTS_FAILED,
        payload: error
      });
    });
};
