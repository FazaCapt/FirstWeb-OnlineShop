import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import component Mine
import Mine from './components/Mine';
import registerServiceWorker from './registerServiceWorker';

// render component mine
ReactDOM.render(<Mine />, document.getElementById('root')); 
registerServiceWorker();
