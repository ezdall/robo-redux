import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
// reducer
import { searchRobots } from './robots.reducers';
// middlewares
const logger = createLogger();

export const store = configureStore({
  reducer: searchRobots,
  middleware: gDM => gDM().concat(logger)
});
