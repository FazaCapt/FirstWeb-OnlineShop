import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import component Mine
import Mine from './Mine';
import registerServiceWorker from './registerServiceWorker';

// render component mine
ReactDOM.render(<Mine />, document.getElementById('root')); 
registerServiceWorker();
