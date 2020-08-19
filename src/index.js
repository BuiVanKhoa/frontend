import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux';
import  appReducers from './store/index_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const store=createStore(
    appReducers,{}, applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
            <App />
        </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
