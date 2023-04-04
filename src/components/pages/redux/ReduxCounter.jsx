import React from 'react';
import { connect} from 'react-redux';
//import actions from '../../../reducers/counter-actions';
import { counterActions  } from '../../../store'

//redux ref: https://medium.com/@rrohit.maheshwari/react-app-using-redux-e6a1a69822d1

class ReduxCounter extends React.Component{
    
    constructor(props){
        super(props); 
        this.onChangeCount=this.onChangeCount.bind(this);
    }
    onClickAddCount(){
        this.props.dispatch(counterActions.incrementBy())
        //this.setState({ count: this.state.count + this.state.incrementBy })
    }
    onClickIncrement(){
        this.props.dispatch(counterActions.increment())
        //this.setState({ count: this.state.count + 1 })
    }
    onClickDecrement(){
        this.props.dispatch(counterActions.decrement())
        //this.setState({ count: this.state.count -1 })
    }
    onChangeCount(amount){
        this.props.dispatch(counterActions.changeAmount(amount))
        //this.setState({ count: this.state.count -1 })
    }
    render(){
        
        let count=this.props.count ;
        let incrementBy=this.props.incrementBy ;
        return <main style={{ padding: "1rem 0" }}>
            <h2>Counter with Redux</h2>
            <label>Counter is {count}</label>
            <span style={{display:"flex"}} className="p-1">
                <button className='btn btn-info me-sm-1' onClick={this.onClickIncrement.bind(this)}>Increment</button>
                <button className='btn btn-danger' onClick={this.onClickDecrement.bind(this)}>Decrement</button>
            </span>
            
            <span style={{display:"flex"}} className="p-1">
                <input className='me-sm-1' type="number" placeholder='Add a number' value={incrementBy} onChange={e => this.onChangeCount( parseInt( e.target.value) )} />            
                <button className='btn btn-success' onClick={this.onClickAddCount.bind(this)}>Add amount</button>
            </span>
            
        </main>
    }

}
export default connect(state=>{    
    return state.counter
})(ReduxCounter)