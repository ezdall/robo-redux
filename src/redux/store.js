import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
// reducer
import { searchRobots, robotReducers } from './robots.reducers';
// middlewares
const logger = createLogger();

export const store = configureStore({
  reducer: { search: searchRobots, robots: robotReducers },
  middleware: gDM => gDM().concat(logger)
});
