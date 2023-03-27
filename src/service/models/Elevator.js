import { ElevatorStatus } from './Enums';
import timeout from './../utils/Timeout';
import EventEmitter from 'events';

class Elevator extends EventEmitter {
    constructor(notifyAvailable) {
        super();
        this.status = ElevatorStatus.Available;
        this.currentFloor = 0;
        this.totalWaitingTime = 0;
        this.floorQueue = [];
        this.currentRequest = undefined;
        this.on('available', notifyAvailable);
        this.onStatusChanged = () => {};
        this.onFloorChanged = () => {};
    }

    setOnStatusChanged(action) {
        this.onStatusChanged = action;
    }

    setOnFloorChanged(action) {
        this.onFloorChanged = action;
    }

    setFloor(floor) {
        this.currentFloor = floor;
        this.onFloorChanged(floor);
    }

    setStatus(status) {
        this.status = status;
        this.onStatusChanged(status);
    }

    getTotalWaitingTime() {
        return (
            this.totalWaitingTime -
            (this.currentRequest !== undefined
                ? this.currentRequest.getElapsedTime()
                : 0)
        );
    }

    getTimeToDst() {
        return this.currentRequest !== undefined
            ? this.currentRequest.getTimeToDst()
            : 0;
    }

    getDst() {
        const dst =
            this.floorQueue.length === 0
                ? this.currentFloor
                : this.floorQueue.at(-1).getDst();
        return dst;
    }

    isAvailable() {
        return this.status === ElevatorStatus.Available;
    }

    calculateTimeToFloor(floor) {
        const dst = this.getDst();
        const diff = Math.abs(dst - floor);
        return this.getTotalWaitingTime() + diff * 1200;
    }

    addFloorRequest(floorReq) {
        this.floorQueue.push(floorReq);
        this.totalWaitingTime += floorReq.calculateTimeToDst() + 2000;
        if (this.currentRequest === undefined) {
            this.checkAndHandleFloorQueue();
        }
    }

    async checkAndHandleFloorQueue() {
        while (this.floorQueue.length > 0) {
            const req = this.floorQueue.shift();
            await this.goToFloor(req);
        }
    }

    async goToFloor(req) {
        if (!this.isAvailable()) {
            throw new Error('Elevator not available to change floors!');
        }
        this.currentRequest = req;
        const dst = this.currentRequest.getDst();
        if (this.currentFloor !== dst) {
            this.setFloor(dst);
            this.setStatus(ElevatorStatus.Running);
        }
        this.currentRequest.start();
        await timeout(req.getTimeToDst());
        this.setStatus(ElevatorStatus.Arrived);
        req.doOnArrive();
        await timeout(2000);
        this.setStatus(ElevatorStatus.Available);
        this.totalWaitingTime -=
            this.currentRequest.calculateTimeToDst() + 2000;
        this.currentRequest.doOnFinish();
        this.currentRequest = undefined;
    }
}

export default Elevator;
