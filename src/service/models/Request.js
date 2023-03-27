class Request {
    constructor(src, dst, onArrive, onFinish) {
        this.srcFloor = src;
        this.dstFloor = dst;
        this.timeStart = undefined;
        this.timeToDst = this.calculateTimeToDst();
        this.onArrive = onArrive;
        this.onFinish = onFinish;
    }

    start() {
        this.timeStart = new Date().getTime();
    }

    getDst() {
        return this.dstFloor;
    }

    getTimeToDst() {
        return this.timeToDst;
    }

    doOnArrive() {
        this.onArrive();
    }

    doOnFinish() {
        this.onFinish();
    }

    getElapsedTime() {
        const now = new Date().getTime();
        return now - this.timeStart;
    }

    calculateTimeToDst() {
        const diff = Math.abs(this.srcFloor - this.dstFloor);
        return diff * 1200;
    }

    calculateTimeLeftToDst() {
        const now = new Date().getTime();
        return this.timeStart + this.timeToDst - now;
    }
}

export default Request;
