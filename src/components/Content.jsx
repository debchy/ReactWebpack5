import React from 'react';
import ReactDom from 'react-dom';

export default class Content extends React.Component{
    constructor(props){
        super(props);
    }

    onClick=(e)=>{
        console.log("txtEmailAddress",ReactDom.findDOMNode(this.refs.emailAddress).value);
        console.log("txtComments",ReactDom.findDOMNode(this.refs.comments).value);
    }
    
    render(){
        this.prompt="Enter your email Address";
        return (
            <div className='well'>
                <p>{this.prompt}</p>
                <div className='form-group'>
                    Email: <input ref="emailAddress" className='form-control' type='text' placeholder="email address"></input>
                </div>
                <div className='form-group'>
                    Comments: <input ref="comments" className='form-control' type='text' placeholder="Put your comments"></input>
                </div>
                <div className='form-group'>
                    <button className='btn btn-primary' onClick={this.onClick}>Submit</button>
                </div>
            </div>
        )
    }
}