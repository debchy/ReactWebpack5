import React from 'react';
import { useSelector} from 'react-redux';

const CarTotalValue=function(){

    const total= useSelector(state=>{
        return state.car.data.filter(car=>car.make.toLowerCase().includes(state.car.searchTerm))
        .reduce((acc,cur)=>acc+cur.price,0);
    })

    return <div className=''>Total: <span className='badge bg-secondary'>{total}</span></div>
}
export default CarTotalValue;