import React from 'react';
import ReactDom from 'react-dom';

export default class Content extends React.Component{
    constructor(props){
        super(props);
        this.emailAddress=React.createRef();
        this.comments=React.createRef();
    }

    onClick=(e)=>{
        console.log("txtEmailAddress",ReactDom.findDOMNode(this.emailAddress.current).value);
        console.log("txtComments",ReactDom.findDOMNode(this.comments.current).value);
    }
    
    render(){
        this.prompt="Enter your email Address";
        return (
            <div className='well'>
                <p>{this.prompt}</p>
                <div className='form-group'>
                    Email: <input ref={this.emailAddress} className='form-control' type='text' placeholder="email address"></input>
                </div>
                <div className='form-group'>
                    Comments: <input ref={this.comments} className='form-control' type='text' placeholder="Put your comments"></input>
                </div>
                <div className='form-group'>
                    <button className='btn btn-primary' onClick={this.onClick}>Submit</button>
                </div>
            </div>
        )
    }
}