import React from 'react';
import ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux';
import { store } from './redux/store';
// data
import { robotData } from './robots';
// style
import './bootstrap.min.css';
import 'tachyons'; // https://tachyons.io/docs/
import './index.css';
// comp
import App from './containers/App';

ReactDOM.render(
  <Provider store={store}>
    <App robots={robotData} />
  </Provider>,
  document.getElementById('root')
);
