import React, { useState } from 'react';
import './FloorCell.css';

function FloorCell({ content, cell, fill }) {
    const [text, setText] = useState('');
    if (cell !== undefined) {
        cell.setOnTextChanged(setText);
    }
    return <div className={`floor-cell ${fill}`}>{cell ? text : content}</div>;
}

export default FloorCell;
