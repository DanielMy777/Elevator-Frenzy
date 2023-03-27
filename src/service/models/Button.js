import { CallStatus } from './Enums';

class Button {
    constructor() {
        this.status = CallStatus.Available;
        this.onStatusChanged = () => {};
    }

    setOnStatusChanged(action) {
        this.onStatusChanged = action;
    }

    setStatus(newStatus) {
        this.status = newStatus;
        this.onStatusChanged(newStatus);
    }
}

export default Button;
