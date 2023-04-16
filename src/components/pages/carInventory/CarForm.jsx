import React from "react";
import { carFormActions, carActions } from "../../../store";
import { connect } from "react-redux";

class CarForm extends React.Component {
    constructor(props) {
        super(props);
        this.changeMake=this.changeMake.bind(this);
        this.changeModel=this.changeModel.bind(this);
        this.changePrice=this.changePrice.bind(this);
        this.addCar=this.addCar.bind(this);
    }

    changeMake(e){
        this.props.dispatch(carFormActions.changeMake(e.target.value))
    }
    changeModel(e){
        this.props.dispatch(carFormActions.changeModel(e.target.value))
    }
    changePrice(e){
        if(!isNaN(e.target.value)){
            this.props.dispatch(carFormActions.changePrice(parseFloat( e.target.value)))
        }
    }
    addCar(e){
        e.preventDefault();
        const {make,model,price} = this.props;
        this.props.dispatch(carActions.addCar({make,model,price}))
    }
    render() {
        return (
            
                <form onSubmit={this.addCar} className="needs-validation" noValidate>
                    <div className="row">
                    <label className="col">
                        <input type="text" name="make" placeholder="Make" className="form-control" value={this.props.make} required={true} onChange={e=>this.changeMake(e)} />
                    </label>
                    <label  className="col">
                        <input type="text" name="model" placeholder="Model" className="form-control" value={this.props.model} required={true} onChange={e=>this.changeModel(e)} />
                    </label>
                    <label className="col">
                        <input type="number" name="price" placeholder="Price" className="form-control" value={this.props.price} required={true} onChange={e=>this.changePrice(e)} />
                    </label>
                    <label className="col"><input type="submit" value="Submit" className="btn btn-secondary" /></label>
                    
                    </div>
                    
                </form>
        );
    }
}
export default connect(state=>state.carForm)(CarForm);