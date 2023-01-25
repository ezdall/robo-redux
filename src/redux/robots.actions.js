import { CHANGE_SEARCH_FIELD } from './robots.types';

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});
