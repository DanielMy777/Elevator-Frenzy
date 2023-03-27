import React, { useState } from 'react';
import ElevatorGrid from '../ElevatorGrid/ElevatorGrid';
import Form from '../Form/Form';
import ElevatorSystem from '../../service/logic/ElevatorSystem';
import './App.css';

function App() {
    const [config, setConfig] = useState({
        stage: 'form',
        numElevators: 4,
        numFloors: 8
    });

    if (config.stage === 'form') {
        return (
            <Form
                onSubmit={(arg1, arg2) => {
                    setConfig({
                        stage: 'grid',
                        numFloors: arg1,
                        numElevators: arg2
                    });
                }}
            />
        );
    } else {
        const system = new ElevatorSystem(
            config.numElevators,
            config.numFloors
        );
        return (
            <ElevatorGrid
                numElevators={config.numElevators}
                numFloors={config.numFloors}
                system={system}
            />
        );
    }
}

export default App;
