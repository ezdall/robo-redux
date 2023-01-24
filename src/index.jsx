import React from 'react';
import ReactDOM from 'react-dom';
// data
import { robotData } from './robots';

import './bootstrap.min.css';
import 'tachyons'; // https://tachyons.io/docs/
import './index.css';
//
import App from './containers/App';

ReactDOM.render(<App robots={robotData} />, document.getElementById('root'));
