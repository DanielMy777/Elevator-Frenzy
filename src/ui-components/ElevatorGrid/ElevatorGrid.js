import React from 'react';
import ElevatorShaft from '../ElevatorShaft/ElevatorShaft';
import ControlPanel from '../ControlPanel/ControlPanel';
import LabelPanel from '../LabelPanel/LabelPanel';
import './ElevatorGrid.css';

function ElevatorGrid({ numFloors, numElevators, system }) {
    if (numFloors > 8) {
        document.body.style.height = 'initial';
    }

    return (
        <div className="floor-grid">
            <LabelPanel numFloors={numFloors} />
            {[...Array(numElevators).keys()].map((n) => (
                <ElevatorShaft
                    numFloors={numFloors}
                    elevator={system.getElevator(n)}
                    cells={system.getCellsOfShaft(n)}
                />
            ))}
            <ControlPanel numFloors={numFloors} system={system} />
        </div>
    );
}

export default ElevatorGrid;
