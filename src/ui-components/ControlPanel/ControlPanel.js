import React from 'react';
import FloorCell from './../FloorCell/FloorCell';
import CallButton from '../CallButton/CallButton';
import './ControlPanel.css';

function ControlPanel({ numFloors, system }) {
    return (
        <div className="ctl-panel">
            {[...Array(numFloors).keys()].map((n) => (
                <FloorCell
                    content={
                        <CallButton
                            button={system.getButton(numFloors - n - 1)}
                            clickEvent={() =>
                                system.callFloor(numFloors - n - 1)
                            }
                        />
                    }
                    fill={'clear'}
                />
            ))}
        </div>
    );
}

export default ControlPanel;
