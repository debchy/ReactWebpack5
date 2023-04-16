import React from "react";
import { useDispatch, useSelector } from "react-redux";


const CarList =()=>{
    const {carList,make} = useSelector(state=>{       
        let carList=state.car.data.filter(car=>car.make.toLowerCase().indexOf(state.car.searchTerm) >= 0);
        return {carList, make:state.carForm.make};
    })

    const renderCars=carList.length === 0?<div>No records</div>:
    carList.map(car=>{
        const isBold= make && car.make.toLowerCase().indexOf(make.toLowerCase())!=-1
        return <div className="row border" key={car.id}>
            <div className={`col border ${isBold && "text-primary"}`}>{car.make}</div>
            <div className="col border ">{car.model}</div>
            <div className="col border ">{car.price}</div>
        </div>
    });

    return <>
        <h3>Car List:</h3>
        <div className="container text-center">
            <div className="row bg-light border">
                <div className="col border">
                    Make
                </div>
                <div className="col border">
                    Model
                </div>
                <div className="col border">
                    Price
                </div>
            </div>
            {renderCars}
        </div>
        
    </>
}
export default CarList