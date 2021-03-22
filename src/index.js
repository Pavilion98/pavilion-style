import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/App';
import reducers from './reducers/index'


const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middlewares));

const persistor = persistStore(store);

ReactDOM.render(

<Provider store = {store}>  
    <PersistGate persistor = {persistor}>
        <App />
    </PersistGate>
</Provider> ,
document.getElementById('root')


);
