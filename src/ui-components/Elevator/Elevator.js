import React, { useState } from 'react';
import { ReactComponent as ElevatorImg } from './../../img/ElevatorImg.svg';
import { motion } from 'framer-motion/dist/framer-motion';
import { ElevatorStatus } from './../../service/models/Enums';
import './Elevator.css';

const MotionElevator = motion(ElevatorImg);

function Elevator({ floorHeight, elevator }) {
    const [floor, setFloor] = useState(0);
    const [status, setStatus] = useState(ElevatorStatus.Available);
    elevator.setOnFloorChanged(setFloor);
    elevator.setOnStatusChanged(setStatus);

    return (
        <div>
            <MotionElevator
                layout
                transition={{ duration: elevator.getTimeToDst() / 1000 }}
                className={`elevator-img ${status.description}`}
                style={{ bottom: `${floorHeight / 10 + floorHeight * floor}%` }}
            ></MotionElevator>
        </div>
    );
}

export default Elevator;
