import React from 'react';
import { connect} from 'react-redux';
import actions from '../../../actions/counter-actions';

class ReduxCounter extends React.Component{
    
    constructor(props){
        super(props); 
        this.onChangeCount=this.onChangeCount.bind(this);
    }
    onClickAddCount(){
        this.props.dispatch(actions.incrementBy())
        //this.setState({ count: this.state.count + this.state.incrementBy })
    }
    onClickIncrement(){
        this.props.dispatch(actions.increment())
        //this.setState({ count: this.state.count + 1 })
    }
    onClickDecrement(){
        this.props.dispatch(actions.decrement())
        //this.setState({ count: this.state.count -1 })
    }
    onChangeCount(amount){
        this.props.dispatch(actions.changeAmount(amount))
        //this.setState({ count: this.state.count -1 })
    }
    render(){
        
        let count=this.props.count ;
        let incrementBy=this.props.incrementBy ;
        return <main style={{ padding: "1rem 0" }}>
            <h2>Counter with Redux</h2>
            <label>Counter is {count}</label>
            <span style={{display:"flex"}}>
                <button onClick={this.onClickIncrement.bind(this)}>Increment</button>
                <button onClick={this.onClickDecrement.bind(this)}>Decrement</button>
            </span>
            
            <span style={{display:"flex"}}>
                <input type="number" placeholder='Add a number' value={incrementBy} onChange={e => this.onChangeCount( parseInt( e.target.value) )} />            
                <button onClick={this.onClickAddCount.bind(this)}>Add amount</button>
            </span>
            
        </main>
    }

}
export default connect(state=>{    
    return state.counter
})(ReduxCounter)