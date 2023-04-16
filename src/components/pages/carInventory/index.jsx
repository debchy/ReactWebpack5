import React from 'react';
import CarForm from './CarForm';
import CarSearch from './CarSearch';
import CarList from './CarList';
import CarTotalValue from './CarTotalValue';

function CarInventory(){
    return (
        <>
            <div>
                <h2>Car Inventory</h2>
            </div>
            <CarForm />
            <CarSearch></CarSearch>
            <CarList></CarList>
            <CarTotalValue></CarTotalValue>
        </>
    )
} 

export default CarInventory;