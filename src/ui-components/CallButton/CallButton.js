import React, { useState } from 'react';
import { CallStatus } from '../../service/models/Enums';
import './CallButton.css';

function CallButton({ clickEvent, button }) {
    const [status, setStatus] = useState(CallStatus.Available);
    button.setOnStatusChanged(setStatus);

    return (
        <button
            disabled={status !== CallStatus.Available}
            className={`call-button call-${status.description.toLowerCase()}`}
            onClick={clickEvent}
        >
            {status.description}
        </button>
    );
}

export default CallButton;
