const CallStatus = Object.freeze({
    Available: Symbol('Call'),
    Waiting: Symbol('Waiting'),
    Arrived: Symbol('Arrived')
});

const ElevatorStatus = Object.freeze({
    Available: Symbol('available'),
    Running: Symbol('running'),
    Arrived: Symbol('arrived')
});

export { CallStatus, ElevatorStatus };
