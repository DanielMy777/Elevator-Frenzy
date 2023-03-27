import React from 'react';
import FloorCell from './../FloorCell/FloorCell';
import Elevator from './../Elevator/Elevator';
import './ElevatorShaft.css';

function ElevatorShaft({ numFloors, cells, elevator }) {
    return (
        <div className="shaft">
            {[...Array(numFloors).keys()].map((n) => (
                <FloorCell cell={cells[numFloors - n - 1]} fill={'full'} />
            ))}
            <Elevator floorHeight={100 / numFloors} elevator={elevator} />
        </div>
    );
}

export default ElevatorShaft;
