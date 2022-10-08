import React from 'react';
import ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { searchRobots } from './redux/robots.reducers';
// data
import { robotData } from './robots';
// style
import './bootstrap.min.css';
import 'tachyons'; // https://tachyons.io/docs/
import './index.css';
// comp
import App from './containers/App';

const store = createStore(searchRobots);

ReactDOM.render(
  <Provider store={store}>
    <App robots={robotData} />
  </Provider>,
  document.getElementById('root')
);
