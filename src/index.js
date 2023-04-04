import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './css/main.css'
import './css/bootstrap.css'
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import counter from './reducers/counter-reducers';

const rootReducer = combineReducers({ counter });

const root =ReactDOM.createRoot(document.getElementById('root'))
root.render( <Provider store={createStore(rootReducer)} > <App/></Provider>,  );