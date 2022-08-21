import React from 'react';
import Router from './Router';
import Content from './components/Content';

export default class App extends React.Component {
    render() {
        return(
            <>
                <h1>App Header</h1>
                <Router /> 
                
                <hr></hr>
                <small>Footer</small>
            </>
            
        );
    }
}

