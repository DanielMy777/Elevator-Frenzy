import Elevator from '../models/Elevator';
import Button from '../models/Button';
import Cell from '../models/Cell';
import Request from '../models/Request';
import { Mutex, MutexInterface } from 'async-mutex';
import { CallStatus } from '../models/Enums';

class ElevatorSystem {
    constructor(numElevators, numFloors) {
        this.callQueue = [];
        this.elevators = [...Array(numElevators)].map(
            (n) => new Elevator(() => this.checkAndHandleCallRequests())
        );
        this.buttons = [...Array(numFloors)].map((n) => new Button());
        this.cells = [...Array(numElevators)].map((n) =>
            [...Array(numFloors)].map((z) => new Cell())
        );
    }

    getElevator(id) {
        return this.elevators[id];
    }

    getButton(id) {
        return this.buttons[id];
    }

    getCellsOfShaft(id) {
        return this.cells[id];
    }

    getCell(shaft, id) {
        return this.cells[shaft][id];
    }

    callFloor(floor) {
        const button = this.buttons[floor];
        button.setStatus(CallStatus.Waiting);
        this.callQueue.push(floor);
        this.checkAndHandleCallRequests();
    }

    async checkAndHandleCallRequests() {
        while (this.callQueue.length > 0) {
            const floor = this.callQueue.shift();
            await this.handleCallRequest(floor);
        }
    }

    async handleCallRequest(floor) {
        const button = this.buttons[floor];
        let minIdx = -1;
        let minTime = Number.MAX_SAFE_INTEGER;
        this.elevators.forEach((e, i) => {
            const currTime = e.calculateTimeToFloor(floor);
            if (currTime < minTime) {
                minIdx = i;
                minTime = currTime;
            }
        });
        try {
            const minElevator = this.elevators[minIdx];
            const newReq = new Request(
                minElevator.getDst(),
                floor,
                () => button.setStatus(CallStatus.Arrived),
                () => button.setStatus(CallStatus.Available)
            );
            minElevator.addFloorRequest(newReq);
            this.cells[minIdx][floor].addCountdown(
                minElevator.getTotalWaitingTime() - 2000
            );
        } catch (error) {
            console.log(error);
        }
    }
}

export default ElevatorSystem;
