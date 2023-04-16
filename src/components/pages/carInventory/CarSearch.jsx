import React from "react";
import { connect } from "react-redux";
import { actions } from "../../../store/slices/carSlice"
import {store} from "../../../store"

class CarSearch extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeText = this.onChangeText.bind(this);
    }
    onChangeText(e){
        this.props.dispatch(actions.changeSearchTerm(e.target.value))
    }

    render() {
        return (
        <div className="row mt-2 mb-2">
            <div className="col-6">
            <input type="text" 
            placeholder="Search" 
            className="form-control col-6" 
            value={this.props.searchTerm}
            onChange={this.onChangeText} />
            </div>
            
        </div> )
    }
}
export default connect(store=>store.car)(CarSearch)