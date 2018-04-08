import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './containers/home/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
