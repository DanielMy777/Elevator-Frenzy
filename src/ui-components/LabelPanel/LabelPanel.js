import React from 'react';
import FloorCell from './../FloorCell/FloorCell';
import FloorText from '../FloorText/FloorText';
import floorToText from './../../service/utils/FloorToText';
import './LabelPanel.css';

function LabelPanel({ numFloors }) {
    return (
        <div className="lbl-panel">
            {[...Array(numFloors).keys()].map(n => (
                <FloorCell
                    content={
                        <FloorText text={floorToText(numFloors - n - 1)} />
                    }
                    fill={'clear'}
                />
            ))}
        </div>
    );
}

export default LabelPanel;
