import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import App from './components/App';
import reducers from './reducers/index'


const middlewares = [logger];

const store = createStore(reducers, applyMiddleware(...middlewares));

ReactDOM.render(

<Provider store = {store} >   
    <App />
</Provider> ,
document.getElementById('root')


);
