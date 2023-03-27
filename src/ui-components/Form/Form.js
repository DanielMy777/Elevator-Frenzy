import React, { useRef } from 'react';
import './Form.css';

const getRefValue = (ref, def) =>
    ref.current.value ? Number(ref.current.value) : def;

function Form({ onSubmit }) {
    const floorRef = useRef(null);
    const elevatorRef = useRef(null);

    return (
        <div className="form">
            <div className="title">Elevator Frenzy!</div>
            <div className="subtitle">
                Take it to the next <u>level</u> ;)
            </div>
            <div className="input-container ic1">
                <input
                    ref={floorRef}
                    id="numFloors"
                    className="input"
                    type="number"
                    min={2}
                    max={10}
                    placeholder=" "
                />
                <label for="numFloors" className="placeholder">
                    Number of floors (default: 8)
                </label>
            </div>
            <div className="input-container ic2">
                <input
                    ref={elevatorRef}
                    id="numElevators"
                    className="input"
                    type="number"
                    min={1}
                    max={8}
                    placeholder=" "
                />
                <label for="numElevators" className="placeholder">
                    Number of elevators (default: 4)
                </label>
            </div>
            <button
                type="text"
                className="submit"
                onClick={() => {
                    onSubmit(
                        getRefValue(floorRef, 8),
                        getRefValue(elevatorRef, 4)
                    );
                }}
            >
                Start!
            </button>
        </div>
    );
}

export default Form;
