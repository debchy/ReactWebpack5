import React from 'react';
import Router from './Router';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import counter from './reducers/counter-reducers';

export default class App extends React.Component {
    
    render() {
        const rootReducer = combineReducers({ counter });
        return(
            <>
                <h1>App Header</h1>
                <Provider store={createStore(rootReducer)} > <Router /></Provider> 
                
                <hr></hr>
                <small>Footer</small>
            </>
            
        );
    }
}

